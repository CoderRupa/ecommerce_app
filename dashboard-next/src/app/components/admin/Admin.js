const Admin = () => {
    return ( <div>
       <div className="container mt-4">
            <form>
                <div className="mb-3">
                    {/* <label>Product Code</label> */}
                    <input type="text" className="form-control" name="productCode" placeholder="Product Code" />
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" name="productName" placeholder="Product Name" />
                </div>

                <div class="mb-3">
                    {/* <label htmlFor="category" class="form-label">Category</label> */}
                    <select class="form-select" id="category">
                        <option selected disabled>Select category</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" name="productAmount" placeholder="Product Amount" />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    </div> );
}

export default Admin;