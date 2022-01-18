import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router'
import AboutPage from '../pages/AboutPage'
import CartPage from '../pages/CartPage'
import ContactPage from '../pages/ContactPage'
import FavouritePage from '../pages/FavouritePage'
import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage'
import PrivacyPage from '../pages/PrivacyPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductSubcategoryPage from '../pages/ProductSubcategoryPage'
import PurchasePage from '../pages/PurchasePage'
import RefundPage from '../pages/RefundPage'
import RegisterPage from '../pages/RegisterPage'
import SearchPage from '../pages/SearchPage'
import UserLoginPage from '../pages/UserLoginPage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import ProfilePage from '../pages/ProfilePage'
import axios from 'axios'
import AppURL from '../api/AppURL'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import MegaMenuAll from '../components/home/MegaMenuAll'
import NavMenuMobile from '../components/common/NavMenuMobile'

export class AppRoute extends Component {

    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        
        axios.get(AppURL.getUser).then(response => {
            this.setUser(response.data)
        }).catch(error => {
            console.log(error)
        });
    }


    setUser = (user) => {
        this.setState({ user: user })
    }


    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={UserLoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/forget-password" component={ForgetPasswordPage} />
                    <Route exact path="/resetpassword/:id" component={ResetPasswordPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/purchase" component={PurchasePage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/productdetails/:code" component={ProductDetailsPage} />
                    <Route exact path="/notification" component={NotificationPage} />
                    <Route exact path="/favourite" component={FavouritePage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/about-us" component={AboutPage} />
                    <Route exact path="/allcategory/:category" component={ProductCategoryPage} />
                    <Route exact path="/allsubcategory/:category/:subcategory" component={ProductSubcategoryPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route exact path='/search/:search' component={SearchPage} />
                    {/* <Route exact path='/suggested/:key' component={SuggestedProduct} /> */}
                    <NavMenuDesktop user={this.state.user} setUser={this.setUser} />
                    <NavMenuMobile user={this.state.user} setUser={this.setUser} />


                    {/* <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} /> } />

                    <Route exact path="/login" render={(props) =>
                        <UserLoginPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/contact" render={(props) =>
                        <ContactPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/purchase" render={(props) =>
                        <PurchasePage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/privacy" render={(props) =>
                        <PrivacyPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/refund" render={(props) =>
                        <RefundPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/productdetails/:code" render={(props) =>
                        <ProductDetailsPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/notification" render={(props) =>
                        <NotificationPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/favourite" render={(props) =>
                        <FavouritePage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/cart" render={(props) =>
                        <CartPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/about-us" render={(props) =>
                        <AboutPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/allcategory/:category" render={(props) =>
                        <ProductCategoryPage {...props} key={Date.now()} />
                    } />
                    <Route exact path="/allsubcategory/:category/:subcategory" render={(props) =>
                        <ProductSubcategoryPage {...props} key={Date.now()} />
                    } /> */}


                </Switch>
            </Fragment>
        )
    }
}

export default AppRoute
