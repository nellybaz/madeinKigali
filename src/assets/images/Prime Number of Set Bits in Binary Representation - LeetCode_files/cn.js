var showCNNoticeSwitch = 'showCNNotice628';
var showCNNotice = localStorage.getItem(showCNNoticeSwitch);
if(showCNNotice == null){
 localStorage.removeItem('region_switcher_last_close_ts');
 localStorage.setItem(showCNNoticeSwitch, true);
}

var cnRedirct = 'cnRedirectx';
var asideID = 'aside#region_switcher';
var aside_shown = new Date() - new Date(localStorage.getItem('region_switcher_last_close_ts')) > 24*60*60*1000;
var rd_cn = new Date() - new Date(localStorage.getItem(cnRedirct)) > 30*60*1000;

var UTMLink = "?utm_source=LCUS&utm_medium=banner_click&utm_campaign=transfer2china";
var UTMLink2 = "?utm_source=LCUS&utm_medium=nbanner_click&utm_campaign=transfer2china";
var trans2CN = '力扣「<a href="https://leetcode-cn.com/problemset/all/' + UTMLink + '&utm_content=title_main" style="font-weight: bold;">中文社区</a>」现已上线，\
全新「<a href="https://support.leetcode-cn.com/hc/kb/article/1286061/' + UTMLink + '&utm_content=title_profile_help">个人主页</a>」更优体验，即刻加入先人一步攒积分！\
- <a href="https://support.leetcode-cn.com/hc/kb/article/1286274/' + UTMLink + '&utm_content=title_learn_more" style="color:#55c6ff;">了解更多</a>\
<div style="font-size: 12px; margin-bottom: 5px;">\
<span style="opacity: 0.7;">新功能推荐：\
<a href="https://leetcode-cn.com/store/' + UTMLink + '&utm_content=sub_store" style="color: orange; font-weight: bold;">🎁 全新积分商场礼品</a> &nbsp;| &nbsp;\
<a href="https://support.leetcode-cn.com/hc/kb/article/1277893/' + UTMLink + '&utm_content=sub_solution" >上万社区题解</a> &nbsp;| &nbsp;\
<a href="https://support.leetcode-cn.com/hc/kb/article/1278078/' + UTMLink + '&utm_content=sub_company" >企业题库</a> &nbsp;| &nbsp;\
<a href="https://support.leetcode-cn.com/hc/kb/article/1278079/' + UTMLink + '&utm_content=sub_mock" >面试模拟</a> &nbsp;| &nbsp;\
<a href="https://leetcode-cn.com/contest/' + UTMLink + '&utm_content=sub_contest" >更多竞赛</a> &nbsp;| &nbsp;\
<a href="https://support.leetcode-cn.com/hc/kb/article/1252597/' + UTMLink + '&utm_content=sub_sync" >轻松数据同步使用已有积分</a>\
</span></div></div>\
<style>\
aside#region_switcher {background: rgba(50,50,50,1);}\
#region_switcher .container {position:relative;}\
@media (max-width: 767px) {\
#scIMG img {bottom: 0px;}\
#region_switcher {transform: translateY(50px);}\
}\
#scIMG img {width: 170px; right: 40px; bottom: -20px; position: absolute;}\
aside#region_switcher .user-actions {padding-top: 15px; font-size: 14px;}\
</style>';

/* Page has aside */
if (document.querySelector(asideID) != null) {
  if(!LeetCodeData.userStatus.isSignedIn) {
    localStorage.removeItem('region_switcher_last_close_ts');
    if(rd_cn){
      rd2CN("banner_redirect");
    }
  }
  
  // Aside not closed
  if(aside_shown) {

    /* Replace Aside Content */
    document.querySelector(`${asideID} .inner .content .title`).innerHTML = trans2CN;
    var scIMG = document.createElement("a");
    scIMG.innerHTML = '<img src="https://assets.leetcode-cn.com/lccn-resources/profile.svg" />'
    scIMG.href = "https://support.leetcode-cn.com/hc/kb/article/1286274/" + UTMLink + "&utm_content=img";
    scIMG.id = "scIMG";
    document.querySelector(`${asideID} .inner`).appendChild(scIMG);

    // Is landing page
    if (document.querySelector("#landing-page-app") != null) {
      document.querySelector(asideID).style["position"] = "relative";
    }
    var asUsrA = `${asideID} .user-actions a`;
    if(document.querySelector(asUsrA).href == "https://leetcode-cn.com/") {
      document.querySelector(asUsrA).href = 'https://support.leetcode-cn.com/hc/kb/article/1286274/';
    }
    document.querySelector(asUsrA).href += `${UTMLink}&utm_content=action_visit`;
  }
} else {
  var ckIpScript = document.createElement('script')
  ckIpScript.type = 'text/javascript'
  ckIpScript.src = `//leetcode-cn.com/api/is_china_ip/?callback=afterCheckCnIp`
  ckIpScript.async = true
  document.head.appendChild(ckIpScript)
  function afterCheckCnIp(fromChina, ip) {
    localStorage.setItem("isCNUser", true);

    // Is question detail page
    if (fromChina && window.location.pathname.includes("/problems/")) {
      
      // Check login status
      if(typeof LeetCodeData !== 'undefined'){
        if(!LeetCodeData.userStatus.isSignedIn) {
          notSameRd();
        }
      } else {
        ckLoginRd('div[class*="auth-links"]');
        if(aside_shown){
          inserNewBanner('body > #app > div[class*="layout"]');
        }
      }
    }
  }
}

function notSameRd(){
  var tPN = window.location.pathname.match(/\/problems\/[a-z\-]+\//g);
  var nsRd = new Date() - new Date(localStorage.getItem(`cn_redirect_${tPN}`)) > 30*60*1000;
  if(nsRd){
    localStorage.setItem(`cn_redirect_${tPN}`, new Date());
    rd2CN("ip_redirect");
  }
}

// dynamic script
function ckLoginRd(selector) {
  if (document.querySelector(selector) == null) {
    setTimeout(function() {
      ckLoginRd(selector);
    }, 100);
  } else {
    localStorage.removeItem('region_switcher_last_close_ts');
    notSameRd();
  }
}

function inserNewBanner(selector) {
  if (document.querySelector(selector) == null) {
    setTimeout(function() {
      inserNewBanner(selector);
    }, 100);
  } else {
    addNewBanner();
  }
}

function rd2CN(typeName) {
  console.log('前往中文站...');
  localStorage.setItem(cnRedirct, new Date());
  window.location.replace(`https://leetcode-cn.com${window.location.pathname}?utm_source=LCUS&utm_medium=${typeName}&utm_campaign=transfer2china`);
}

function cn_closeBtn(){
  localStorage.setItem('region_switcher_last_close_ts', new Date());
  document.querySelector('#CNbanner').className = "hide";
}

function addNewBanner(){
  var newPgBanner = document.createElement("div");
  newPgBanner.id = "CNbanner";
  newPgBanner.innerHTML = `
  <style>
  #CNbanner.hide {
    display: none;
  }
  #CNbanner {
    background: white;
    margin-top: -1px;
    border-bottom: 1px solid rgba(0,0,0,0.07);
    height: 55px;
  }
  #CNbanner a {
    color: #263238;
  }
  #CNbanner a:hover {
    opacity: 0.7;
  }
  .baIMG {
    height: 55px;
    position: absolute;
    bottom: 0;
    left: 20px;
  }
  .cn_close_btn {
    position: absolute;
    font-weight: bold;
    font-size: 14px;
    top: 10px;
    right: 10px;
    border-radius: 50px;
    height: 20px;
    width: 20px;
    background: rgba(0,0,0,0.2);
    color: white;
    line-height: 1.3;
    text-align: center;
    cursor: pointer;
    transition: 0.6s all;
  }
  .cn_close_btn:hover {
    background: rgba(0,0,0,0.7);
  }
  </style>
  <div style="position: relative; max-width: 1240px; height: 100%; width: 100%;">
    <a href="https://support.leetcode-cn.com/hc/kb/article/1286274/${UTMLink2}&utm_content=img">
      <img class="baIMG" src="https://assets.leetcode-cn.com/lccn-resources/profile.svg" />
    </a>
    <div style="margin-left: 170px">
      <div>
        力扣「<a href="https://leetcode-cn.com/problemset/all/${UTMLink2}&utm_content=title_main" style="font-weight: bold;">中文社区</a>」现已上线，
        全新「<a href="https://support.leetcode-cn.com/hc/kb/article/1286061/${UTMLink2}&utm_content=title_profile_help" style="font-weight: bold;">个人主页</a>」更优体验，
        <a href="https://leetcode-cn.com/problemset/all/${UTMLink2}&utm_content=title_go">即刻加入先人一步攒积分！</a>
      </div>
      <div style="font-size: 12px; margin-top: 5px;">
        <span style="opacity: 0.7;">新功能推荐：
          <a href="https://leetcode-cn.com/store/${UTMLink2}&utm_content=sub_store" style="color: rgba(239,108,0,1); font-weight: bold;">🎁 全新积分商场礼品</a> &nbsp;| &nbsp;
          <a href="https://support.leetcode-cn.com/hc/kb/article/1277893/${UTMLink2}&utm_content=sub_solution" >上万社区题解</a> &nbsp;| &nbsp;
          <a href="https://support.leetcode-cn.com/hc/kb/article/1278078/${UTMLink2}&utm_content=sub_company" >企业题库</a> &nbsp;| &nbsp;
          <a href="https://support.leetcode-cn.com/hc/kb/article/1278079/${UTMLink2}&utm_content=sub_mock" >面试模拟</a> &nbsp;| &nbsp;
          <a href="https://leetcode-cn.com/contest/${UTMLink2}&utm_content=sub_contest" >更多竞赛</a> &nbsp;| &nbsp;
          <a href="https://support.leetcode-cn.com/hc/kb/article/1252597/${UTMLink2}&utm_content=sub_sync" >轻松数据同步使用已有积分</a>
        </span>
      </div>
    </div>

    <div class="cn_close_btn" onclick="cn_closeBtn()">×</div>
  </div>
  `;
  var bdparent = document.querySelector('body > #app > div[class*="layout"]');
  bdparent.insertBefore(newPgBanner, bdparent.children[1]);

  
}