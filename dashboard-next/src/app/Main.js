import Footer from "./components/Footer";
import HomePage from "./components/HomePage"; 
import Header from "./components/Header"; 
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import ProductList from "./components/product/ProductList";
import ProductDetails from "./components/product/ProductDetails";
import EditProduct from "./components/product/EditProduct";
import AddProduct from "./components/product/AddProduct";
import CategoryList from "./components/category/CategoryList";
import AddCategory from "./components/category/AddCategory";
import EditCategory from "./components/category/EditCategory";
import ShoppingDetails from "./components/shopping/ShoppingDetails";
import PaymentDetails from "./components/payment/PaymentDetails";
import OrderConfirmed from "./components/order/OrderConfirmed";
import CartDetails from "./components/cart/CartDetails";
import Admin from "./components/admin/Admin";

const Main = () => {
    return ( <div>
       <Header />
       <HomePage />
         <LoginPage />
         <Register />
         <ProductList />
         <ProductDetails />
         <EditProduct />
         <AddProduct />
         <CategoryList />
         <AddCategory />
         <EditCategory />
         <ShoppingDetails />
         <PaymentDetails />
         <OrderConfirmed />
         <CartDetails />
         <Admin />
       <Footer />
     
    </div> );
}

export default Main;