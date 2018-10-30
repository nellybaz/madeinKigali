<?php

ini_set("date.timezone", "Africa/Kigali");

class Model {
	private $mysqli;
	private $numAlpha = ['R','A','9','F','1','W','G','S','H','3','E','4','Y','I','D','O','P','7','C','B','Z','U','M','5','J','L','2','Q','X','K','6','0','T','V','N','8'];

	function __construct() {
		$this->mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	}

	function __destruct() {
		$this->mysqli->close();
	}

	// ------------------------------------------ SETTERS/GETTERS -------------------------------------------- //
	function getMysqli() {
		return $this->mysqli;
	}
	function setMysqli($mysqli) {
		$this->mysqli = $mysqli;
	}
	// ------------------------------------------ SETTERS/GETTERS -------------------------------------------- //

	// QUERY METHOD
	function query($query) {
		return $this->mysqli->query($query);
	}

	// ------------------------------------------ CRUD OPERATIONS -------------------------------------------- //
	function create($tab, $arr=[], $type_string="") {
		$ret = 0;
		if (!empty($arr)) {
			// Build the query;
			$keys = '';
			$values = '';
			$pos = '';
			foreach ($arr as $key => $value) {
				$keys .= "`".$key."`,";
				$values .= "'".$value."',";
				$pos .= "?,";
			}
			$keys = rtrim($keys, ',');
			$values = rtrim($values, ',');
			$pos = rtrim($pos, ',');
			$query = "INSERT INTO {$tab} ({$keys}) VALUES ($pos)";
			// $this->mysqli->query($query);
			// $ret = $this->mysqli->insert_id;
			if($stmt = $this->mysqli->prepare($query)) {
				$this->bind_params($stmt, $type_string, explode(",",$values));
				$stmt->execute();
				$ret = $stmt->insert_id;
				$stmt->close();
			}
		}
		return $ret;
	}
	
	private function bind_params($stmt, $type_string, $valArr) {
		$len = count($valArr);
		$arr = array();
		foreach($valArr as $idx => $value) {
			if($type_string[$idx] == 'd' || $type_string[$idx] == 'i') {
				$value = str_replace("'", "", $value);
			}
			$arr[] = $value;
		}
		switch($len) {
			case 1: 
				$val = $arr[0];
				$stmt->bind_param($type_string, $val); break;
			case 2: 
				$val1 = $arr[0]; $val2 = $arr[1];
				$stmt->bind_param($type_string, $val1, $val2); break;
			case 3:  
				$val1 = $arr[0]; $val2 = $arr[1]; $val3 = $arr[2];
				$stmt->bind_param($type_string, $val1, $val2, $val3); break;
			case 4: 
				$val1 = $arr[0]; $val2 = $arr[1]; $val3 = $arr[2]; $val4 = $arr[3];
				$stmt->bind_param($type_string, $val1, $val2, $val3, $val4); 
				break;
			case 5: 
				$val1 = $arr[0]; $val2 = $arr[1]; $val3 = $arr[2]; $val4 = $arr[3]; $val5 = $arr[4];
				$stmt->bind_param($type_string, $val1, $val2, $val3, $val4, $val5); 
				break;
			case 6: 
				$val1 = $arr[0]; $val2 = $arr[1]; $val3 = $arr[2]; $val4 = $arr[3]; $val5 = $arr[4]; $val6 = $arr[5];
				$stmt->bind_param($type_string, $val1, $val2, $val3, $val4, $val5, $val6);
				break;
			case 7: 	
				$val1 = $arr[0]; $val2 = $arr[1]; $val3 = $arr[2]; $val4 = $arr[3]; $val5 = $arr[4]; $val6 = $arr[5]; $val7 = $arr[6];
				$stmt->bind_param($type_string, $val1, $val2, $val3, $val4, $val5, $val6, $val7);
				break;
		}
	}

	function read($tab, $sel, $whr, $opt="") {
		// $tab - this is the table array we want to read from.
		// $sel - this is the array value of the columns we want to select.
		// $whr - this is the where clause.
		// $opt - this is the optional query clause.

		$sels = implode(',', $sel);
		$tabs = implode(',', $tab);

		$query = "SELECT {$sels} FROM {$tabs} WHERE {$whr} {$opt}";
		// echo $query;
		return $this->feedbackRows($this->query($query));
	}

	function update($tab, $arr=[], $whr) {
		// $tab - this is the table which we want to update.
		// $arr - this is the $key=>$value we want to update.
		// $whr - this is the where clause.

		$ret = 0;
		if (!empty($arr)) {
			// Build the query;
			$key_val = '';
			foreach ($arr as $key => $value) {
				$key_val .= "`".$key."`='".$value."',";
			}
			$key_val = rtrim($key_val, ',');
			
			$query = "UPDATE {$tab} SET {$key_val} WHERE {$whr}";
			// echo $query;

			$this->mysqli->query($query);
			$ret = $this->mysqli->affected_rows;
		}
		return $ret;
	}

	function delete($tab, $whr="1=1") {
		$query = "DELETE FROM {$tab} WHERE {$whr}";
		$res = $this->query($query);
		return $this->mysqli->affected_rows;
	}
	// ------------------------------------------ CRUD OPERATIONS -------------------------------------------- //



	// ------------------------------------------ MAIN PARENT METHODS ---------------------------------------- //
	// FLAG 1 = SUCCESS
	// FLAG 0 = ERROR
	function feedback($msg, $flag=0) {
		$feedback['flag'] = $flag;
		$feedback['message'] = $msg;
		return $feedback;
	}

	function feedbackRows($get, $flag=1, $isAssoc=false, $idName="") {
		if ($get && $get->num_rows > 0) {
			$feedback['flag'] = $flag;
			$feedback['result'] = [];
			while ($row = $get->fetch_array(MYSQLI_ASSOC)) {
				if (!$isAssoc) {
					array_push($feedback['result'], $row);
				} else {
					$feedback['result'][$row[$idName]] = $row;
				}
			}
		} else {
			$feedback = $this->feedback("data does not exist");
		}
		return $feedback;
	}

	function genRandomCode($difficulty=5) {
		$key = "";
		$l = count($this->numAlpha) - 1;
		for ($i=0; $i < $difficulty; $i++) { 
			$key .= $this->numAlpha[rand(0,$l)];
		}
		return $key;
	}

	function esc($str) {
		return $this->mysqli->real_escape_string(filter_var(strip_tags($str), FILTER_SANITIZE_STRING));
	}

	function get($arr=[], $key='') {
		return (isset($arr[$key])) ? $this->esc($arr[$key]) : "";
	}

	// ------------------------------------------ MAIN PARENT METHODS ---------------------------------------- //
}