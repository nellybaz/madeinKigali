import React, {Component} from 'react';


class D_Products extends Component{
    render(){
        return(
            <div className='D_Products'>
                     <div className='d-right-wrapper'>
                    <h5><b>ADD PRODUCTS</b></h5>

                    <div className='d-right-content'>
                        <input onChange={(e)=>{
                            this.setState({
                                prd_name: e.target.value
                            })}} type="text" placeholder="Product name" />

                        <input onChange={(e)=>{
                            this.setState({
                                prd_price: e.target.value
                            })}} type="text" placeholder="Product price" />

                        <select onChange={(e)=>{
                            this.setState({
                                category: e.target.value
                            })
                          
                        }}>
                            <option selected>Select Category</option>
                            <option value = "men">Men</option>
                            <option value = "women">Women</option>
                          
                        </select>

                        <select onChange={(e)=>{
                            this.setState({
                                sub_category: e.target.value
                            })
                          
                        }}>
                            <option selected>Select Sub Category</option>
                            <option value = "dress">Dress</option>
                            <option value = "shoes">Shoes</option>
                            <option value = "shirts">Shirts</option>
                        </select>
                        <select onChange={(e)=>{
                            this.setState({
                                brand: e.target.value
                            })
                          
                        }}>
                            <option selected>Select Brand</option>
                            <option value = "amami">Amami</option>
                            <option value = "mik">MIK</option>
                            <option value = "mik & co">MIK & CO</option>
                        </select>
                        <input type="text" placeholder="Sex" />

                        <form>
                            <label>Product Size</label> <br></br>
                            <input hidden/>
                            <input  className='checkbox' value="s, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> S <br></br>
                            <input className='checkbox' value="m, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> M <br></br>
                            <input className='checkbox' value="l, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> L <br></br>

                            <input className='checkbox' value="xl, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> XL <br></br>
                            <input className='checkbox' value="2xl, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> 2XL <br></br>
                            <input className='checkbox' value="3xl, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> 3XL <br></br>
                            <input className='checkbox' value="all, " type="checkbox" onChange={(e)=> {
                                this.setState({
                                    size: this.state.size + e.target.value
                                })
                            }} /> ALL <br></br>
                        </form>
                        <input onChange={(e)=>{
                            this.setState({
                                instock: e.target.value
                            })}} type="number" placeholder="Product instock" />
                        <input type="file" onChange={this.handleImageUpload} /> 

                        <button onClick={()=> this.handleAddProducts()} className='add-btn'>ADD</button>                   
                    </div>
                
                </div>
            </div>
        )
    }
}

export default D_Products;