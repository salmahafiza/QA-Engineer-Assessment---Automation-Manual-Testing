const { expect } = require('@playwright/test');

class E2EPurchaseFlow {
    constructor(page) {
        this.page = page;

        /** LOCATORS **/
        this.registerLink = page.locator('.ico-register')
        this.loginLink = this.page.locator('a.ico-login');
        this.usernameField = page.locator('input#Email');
        this.passwordField = page.locator('input#Password');
        this.loginButton = page.locator('input[value="Log in"]');
        this.field_pageTitle = page.locator(".page-title");
        this.radioButtonGenderMale = page.locator("#gender-male");
        this.radioButtonGenderFemale = page.locator("#gender-female");
        this.field_FirstName = page.locator("input#FirstName");
        this.field_LastName = page.locator("input#LastName");
        this.field_registrationEmail = page.locator("input#Email");
        this.field_registrationPassword = page.locator("input#Password");
        this.field_confirmRegistrationPassword = page.locator("input#ConfirmPassword");
        this.SubmitBtn = page.locator("input#register-button");
        this.resultMessage = page.locator(".result");
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.clickOnCart = page.locator('a.ico-cart:has(span.cart-label:has-text("Shopping cart"))');
        this.cartCount = page.locator('.cart-qty');
        this.checkTermsConditions = page.locator('input#termsofservice');
        this.checkoutButton = page.locator('button#checkout');
        // Cart & Checkout
        this.termsAndCondition = page.locator('#termsofservice');
        this.checkOut = page.locator('#checkout');

        // Billing Address
        this.billingAddressDropdown = page.locator('#billing-address-select');
        this.firstNameField = page.locator('#BillingNewAddress_FirstName');
        this.lastNameField = page.locator('#BillingNewAddress_LastName');
        this.emailField = page.locator('#BillingNewAddress_Email');
        this.countryDropdownB = page.locator('#BillingNewAddress_CountryId');
        this.stateDropdownB = page.locator('#BillingNewAddress_StateProvinceId');
        this.cityField = page.locator('#BillingNewAddress_City');
        this.address1Field = page.locator('#BillingNewAddress_Address1');
        this.zipField = page.locator('#BillingNewAddress_ZipPostalCode');
        this.phoneField = page.locator('#BillingNewAddress_PhoneNumber');
        this.continueButton = page.locator("input[onclick='Billing.save()']");

        // Shipping Address
        this.shippingAddressDropdown = page.locator('#shipping-address-select');
        this.ShippingfirstNameField = page.locator('#ShippingNewAddress_FirstName');
        this.ShippinglastNameField = page.locator('#ShippingNewAddress_LastName');
        this.ShippingemailField = page.locator('#ShippingNewAddress_Email');
        this.ShippingcountryDropdownB = page.locator('#ShippingNewAddress_CountryId');
        this.ShippingstateDropdownB = page.locator('#ShippingNewAddress_StateProvinceId');
        this.ShippingcityField = page.locator('#ShippingNewAddress_City');
        this.Shippingaddress1Field = page.locator('#ShippingNewAddress_Address1');
        this.ShippingzipField = page.locator('#ShippingNewAddress_ZipPostalCode');
        this.ShippingphoneField = page.locator('#ShippingNewAddress_PhoneNumber');
        this.continueShippingsaveBtn = page.locator("input[onclick='Shipping.save()']");
        this.countryDropdown = page.locator('#CountryId');
        this.stateDropdown = page.locator('#StateProvinceId');
        this.zipCodeField = page.locator('#ZipPostalCode');
        this.estimateButton = page.locator('input[value="Estimate shipping"]');
        this.shippingOptions = page.locator('.shipping-options');

        // Shipping Method
        this.groundShippingOption = page.locator('#shippingoption_0');
        this.nextDayShippingOption = page.locator('#shippingoption_1');
        this.secondDayShippingOption = page.locator('#shippingoption_2');
        this.continuePaymentViaCard = page.locator("input[class='button-1 payment-info-next-step-button']");
        this.continueShippingMethod = page.locator("input[class='button-1 shipping-method-next-step-button']");

        // Payment Method
        this.COD = page.locator('input#paymentmethod_0');
        this.creditCard = page.locator('input#paymentmethod_2');
        this.continuePayment = page.locator("input[class='button-1 payment-method-next-step-button']");
        this.continuePaymentInfo = page.locator("input[class='button-1 payment-info-next-step-button']");
        this.cardType = page.locator('#CreditCardType');
        this.cardHolderName = page.locator('#CardholderName');
        this.cardNumber = page.locator('#CardNumber');
        this.expireMonth = page.locator('#ExpireMonth');
        this.expireYear = page.locator('#ExpireYear');
        this.cardCode = page.locator('#CardCode');

        // Confirm Order
        this.assertConfirmOrder = page.locator("//h2[normalize-space()='Confirm order']");
        this.confirmBtn = page.locator("input[value='Confirm']");
        this.assertOrderConfirmation = this.page.locator('.section.order-completed .title strong');
        this.lastBtn = page.locator("input[value='Continue']");
        this.CheckOrder = page.locator("//a[normalize-space()='Click here for order details.']");
        this.OrderInfo = page.locator("//h1[normalize-space()='Order information']");
        this.PDPproductName = page.locator('.product-name');
        this.PDPproductPrice = page.locator("//span[contains(@class,'actual-price')]");
        this.cartQuantityField = page.locator('.cart-qty');
        this.thankYouTitle = this.page.locator('.page-title h1');


        // Reviews
        this.productReviews = page.locator(".product-review-links");
        this.assertReviews = page.locator("div[class='product-review-list'] div[class='title'] strong");

        // Compare
        this.addtoCompare = page.locator("input[value='Add to compare list']");
        this.compare = page.locator('.compare-products-table');

        // Email a friend
        this.emailAFriendButton = page.locator('input[value="Email a friend"]');
        this.friendEmailField = page.locator('#FriendEmail');
        this.yourEmailField = page.locator('#YourEmailAddress');
        this.personalMessageField = page.locator('#PersonalMessage');
        this.sendEmailButton = page.locator('input[name="send-email"]');
        this.successMessage = page.locator('.result');

        // Description & Images
        this.pdpDescription = page.locator('.full-description');
        this.PDPImageGallery = page.locator('div.picture-thumbs img');
        this.quantityErrorMessage = page.locator(".bar-notification.error");
        this.categoryMenu = page.locator('ul.top-menu');
        this.subCategoryBlock = page.locator('div.block-category-navigation');
        this.pageTitle = page.locator('div.page-title h1');
        this.productTitles = page.locator('.product-title');
        this.productImages = page.locator('.product-item img');
        this.productPrices = page.locator('.prices');
        this.productPerPage = page.locator('#products-pagesize');
        this.productGridItems = page.locator('.product-item');
        this.nextPage = page.locator('.next-page');
        this.previousPage = page.locator('.previous-page');
        this.listViewProducts = page.locator('.product-list');
        this.gridViewProducts = page.locator('.product-grid');
        this.viewModeDropdown = page.locator('#products-viewmode');
        this.orderCompletedSection = this.page.locator('div.section.order-completed');
        this.orderSuccessTitle = this.page.locator('div.section.order-completed .title strong');
        this.orderNumberText = this.page.locator('div.section.order-completed ul.details li').first();
        this.orderDetailsLink = this.page.locator('div.section.order-completed ul.details li a');
    }
    async accessApplication() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async verifyHomePageTitle() {
        await expect(this.page).toHaveTitle(/Demo Web Shop/);
    }

    async login(username, password) {
        await this.loginLink.click();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
    async enterUsername(username) {
        await this.usernameField.fill(username);
    }

    async enterPassword(password) {
        await this.passwordField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
    async EnterFirstName(firstname) {
        await this.field_FirstName.fill(firstname);
    }

    async EnterLastName(lastname) {
        await this.field_LastName.fill(lastname);
    }
    async clickRegisterLink() {
        await this.registerLink.click();
    }
    async clickRegisterationBtnOnLoginPage() {
        await this.registerBtnOnLogin.click();
    }

    async EnterEmail(email) {
        await this.field_registrationEmail.fill(email);
    }

    async EnterPassword(password) {
        await this.field_registrationPassword.fill(password);
    }

    async EnterConfirmPassword(password) {
        await this.field_confirmRegistrationPassword.fill(password);
    }

    async ClickRegisterButton() {
        await this.SubmitBtn.click();
    }

    async verifySuccessfulRegistration() {
        await expect(this.resultMessage).toHaveText(/Your registration completed/i);
    }

    async clickOnAddToCartButton() {
        await this.addToCartButton.click(); // "14.1-inch Laptop"
        console.log('Clicking on Add to Cart button');
    }

    async navigateToShoppingCart() {
        await this.clickOnCart.click();
        console.log('Navigating to Shopping Cart');
    }

    async verifyItemAddedToCart(expectedQty = 1) {
        const quantityValue = await this.page.locator('span.cart-qty').textContent();
        const qty = parseInt(quantityValue.replace(/[()]/g, ''), 10); // remove ( )
        console.log(`Quantity is: ${qty}`);
        expect(qty).toBe(expectedQty);

        if (qty === expectedQty) {
            console.log('Correct item quantity is displaying:', qty);
        } else {
            console.log(' Item quantity mismatch. Expected:', expectedQty, 'but got:', qty);
        }
    }


    async acceptTermsAndConditions() {
        await this.checkTermsConditions.check();
        console.log('Accepting terms and conditions');
    }

    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
        console.log('Clicking on Checkout button');
    }

    async acceptTermsAndCondition() {
        await this.termsAndCondition.check();
        await expect(this.termsAndCondition).toBeChecked();
    }

    async proceedToCheckOut() {
        await this.checkOut.click();
    }
    async selectAddNewAddress() {
        await this.billingAddressDropdown.selectOption({ label: 'New Address' });
    }
    async selectAddNewAddressShipping() {
        await this.shippingAddressDropdown.selectOption({ label: 'New Address' });
    }
    async fillBillingAddress(data) {
        await this.firstNameField.fill(data.firstName);
        await this.lastNameField.fill(data.lastName);
        await this.emailField.fill(data.email);
        await this.countryDropdownB.selectOption({ label: data.country });

        if (await this.stateDropdownB.isVisible()) {
            await this.stateDropdownB.selectOption({ label: data.state });
        }
        await this.cityField.fill(data.city);
        await this.address1Field.fill(data.address1);
        await this.zipField.fill(data.zip);
        await this.phoneField.fill(data.phone);
    }
    async fillShippingAddress(data) {
        await this.ShippingfirstNameField.fill(data.firstName);
        await this.ShippinglastNameField.fill(data.lastName);
        await this.ShippingemailField.fill(data.email);
        await this.ShippingcountryDropdownB.selectOption({ label: data.country });

        if (await this.ShippingstateDropdownB.isVisible()) {
            await this.ShippingstateDropdownB.selectOption({ label: data.state });
        }
        await this.ShippingcityField.fill(data.city);
        await this.Shippingaddress1Field.fill(data.address1);
        await this.ShippingzipField.fill(data.zip);
        await this.ShippingphoneField.fill(data.phone);
    }
    async clickContinue() {
        await this.continueButton.click();
    }
    async clickContinueShippingSave() {
        await this.continueShippingsaveBtn.click();
    }
    async assertShoppingCartPage() {
        await expect(this.shoppingCartPage).toHaveText('Shopping cart');
    }
    async selectCountry(country) {
        await this.countryDropdown.selectOption({ label: country });
    }
    async selectState(state) {
        await this.stateDropdown.selectOption({ label: state });
    }
    async enterZipCode(zip) {
        await this.zipCodeField.fill(zip);
    }
    async selectShippingMethod(method = 'Ground (0.00)') {
        if (method === 'Ground (0.00)') {
            await this.groundShippingOption.check();
        } else if (method === 'Next Day Air (0.00)') {
            await this.nextDayShippingOption.check();
        } else if (method === '2nd Day Air (0.00)') {
            await this.secondDayShippingOption.check();
        }
    }
    async clickContinueShippingMethod() {
        await this.continueShippingMethod.click();
    }
    async selectPaymentMethod(method = 'Cash On Delivery (COD) (7.00)') {
        if (method === 'Cash On Delivery (COD) (7.00)') {
            await this.COD.check();
        } else if (method === 'Check / Money Order (5.00)') {
            await this.Check_MoneyOrder.check();
        } else if (method === 'Credit Card') {
            await this.creditCard.check();
        } else if (method === 'Purchase Order') {
            await this.purchaseOrderBtn.check();
        }
    }
    async clickContinuePaymentMethod() {
        await this.continuePayment.click();
    }
    async COD_confirmationText() {
        await expect(this.paymentConfirmationText_COD).toHaveText('You will pay by COD');
    }
    async MoneyOrderConfirmation() {
        await expect(this.moneyOrder).toContainText(`Mail Personal or Business Check, Cashier's Check or money order to:`)
    }
    async clickContinueWithMoneyOrder() {
        await this.continueMoneyOrder.click();
    }
    async addPurchaseOrderNo() {
        await this.purchaseOrder.fill('21213');
    }
    async clickOnContinueWithPurchaseOrder() {
        await this.continueWithPurchaseOrder.click();
    }

    async ContinuePayment() {
        await this.continuePaymentInfo.click();
    }

    async PaymentViaCreditCard(cardData) {
        await this.cardType.selectOption({ label: cardData.cardType });
        await this.cardHolderName.fill(cardData.holderName);
        await this.cardNumber.fill(cardData.cardNumber);
        await this.expireMonth.selectOption(cardData.expireMonth);
        await this.expireYear.selectOption(cardData.expireYear);
        await this.cardCode.fill(cardData.cardCode);
    }
    async ContinueViaCard() {
        await this.continuePaymentViaCard.click();
    }
    async confirm() {
        await expect(this.assertConfirmOrder).toHaveText('Confirm order')
    }
    async clickConfirmOrder() {
        await this.confirmBtn.click();
    }
    async OrderConfirmationMsg() {
        await expect(this.assertOrderConfirmation).toContainText('Your order has been successfully processed!');

    }
    async getOrderDetails() {
        const message = await this.orderSuccessTitle.textContent();
        const orderNumberLine = await this.orderNumberText.textContent();
        const orderNumber = orderNumberLine.replace('Order number:', '').trim();
        const detailsLink = await this.orderDetailsLink.getAttribute('href');
        console.log(`${message}`);
        console.log(`Order number: ${orderNumber}`);
        console.log(`Details link: ${detailsLink}`);
        return { message, orderNumber, detailsLink };
    }

    async clickContinueLastBtn() {
        await this.lastBtn.click();
    }


    async getPDPDetails() {
        const name = (await this.PDPproductName.textContent()).trim();
        const price = (await this.PDPproductPrice.textContent()).trim();
        console.log(`PDP Product → ${name} | Price: ${price}`);
        return { name, price };
    }

    async addToCart() {
        await this.addToCartButton.click();
        await expect(this.cartQuantityField).toBeVisible();
    }

    async verifyProductReviews() {
        await this.productReviews.click();
        await expect(this.assertReviews).toHaveText('Existing reviews');
    }

    async clickOnAddToCompare() {
        await this.addtoCompare.click();
        await expect(this.compare).toBeVisible();
    }

    async emailAFriend(friendEmail, yourEmail, message) {
        await this.emailAFriendButton.click();
        await this.friendEmailField.fill(friendEmail);
        await this.yourEmailField.fill(yourEmail);
        await this.personalMessageField.fill(message);
        await this.sendEmailButton.click();
        await expect(this.successMessage).toHaveText("Your message has been sent.");
    }

    async verifyDescription() {
        await expect(this.pdpDescription).toBeVisible();
    }

    async verifyImageGallery() {
        const count = await this.PDPImageGallery.count();
        console.log(`Gallery images found: ${count}`);
        expect(count).toBeGreaterThan(0);
    }

    async verifyQuantityError(expectedMessage = 'Your shopping cart is empty!') {
        await expect(this.quantityErrorMessage).toContainText(expectedMessage);
    }
    async clickOnCategory(categoryName) {
        await this.categoryMenu.locator(`a:has-text("${categoryName}")`).first().click();
    }

    async clickOnSubCategory(subCategoryName) {
        await this.subCategoryBlock.locator(`a:has-text("${subCategoryName}")`).first().click();
    }

    async verifyPageTitle(expectedTitle) {
        await expect(this.pageTitle).toHaveText(expectedTitle);
    }

    async verifyAllProductTitlesDisplayed() {
        const titles = await this.productTitles.allTextContents();
        expect(titles.length).toBeGreaterThan(0);
    }

    async verifyAllProductImagesDisplayed() {
        const images = await this.productImages.all();
        for (const image of images) {
            await expect(image).toBeVisible();
        }
    }

    async verifyAllProductPricesDisplayed() {
        const prices = await this.productPrices.allTextContents();
        expect(prices.length).toBeGreaterThan(0);
    }

    async verifyAllAddToCartButtonsDisplayed() {
        const totalButtons = await this.addToCartButton.count();
        expect(totalButtons).toBeGreaterThan(0);
    }

    async selectSortBy(optionLabel) {
        await this.page.locator('#products-orderby').selectOption({ label: optionLabel });
    }

    async verifySortingAlphabetical(order = 'A-Z') {
        const productNames = await this.productTitles.allTextContents();
        const sorted = [...productNames].sort((a, b) =>
            order === 'A-Z' ? a.localeCompare(b) : b.localeCompare(a)
        );
        expect(productNames).toEqual(sorted);
    }

    async verifyPriceRange(minPrice, maxPrice) {
        const prices = await this.page.locator("//span[@class='price actual-price']").allTextContents();
        for (const price of prices) {
            const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
            expect(numericPrice).toBeGreaterThanOrEqual(minPrice);
            expect(numericPrice).toBeLessThanOrEqual(maxPrice);
        }
    }

    async selectProductsPerPage(count) {
        await this.productPerPage.selectOption(count.toString());
    }

    async getDisplayedProductCount() {
        return await this.productGridItems.count();
    }

    async clickNextPage() {
        await this.nextPage.click();
    }

    async clickPreviousPage() {
        await this.previousPage.click();
    }

    async switchToListView() {
        await this.viewModeDropdown.selectOption({ label: 'List' });
        await expect(this.listViewProducts).toBeVisible();
    }

    async switchToGridView() {
        await this.viewModeDropdown.selectOption({ label: 'Grid' });
        await expect(this.gridViewProducts).toBeVisible();
    }

    async captureOrderNumber() {
        const orderText = await this.page.locator(".order-number").textContent();
        const orderNumber = orderText.replace("ORDER NUMBER: ", "").trim();
        console.log(`Order Number: ${orderNumber}`);
        return orderNumber;
    }
    async verifyProductDetailsAcrossFlow(expectedName, expectedPrice) {
        // PDP
        const pdp = await this.getPDPDetails();
        expect(pdp.name).toBe(expectedName);
        expect(pdp.price).toBe(expectedPrice);

        // Cart
        const cartName = await this.page.locator('.cart-item .product-name').textContent();
        const cartPrice = await this.page.locator('.cart-item .product-unit-price').textContent();
        expect(cartName.trim()).toBe(expectedName);
        expect(cartPrice.trim()).toBe(expectedPrice);

        // Checkout
        const checkoutName = await this.page.locator('.order-summary-content .product-name').textContent();
        const checkoutPrice = await this.page.locator('.order-summary-content .product-unit-price').textContent();
        expect(checkoutName.trim()).toBe(expectedName);
        expect(checkoutPrice.trim()).toBe(expectedPrice);
    }

    async verifyCartTotals() {
        // Extract values based on row labels
        const subtotal = parseFloat(
            (await this.page.locator("//tr[td/span[contains(text(),'Sub-Total:')]]//span[@class='product-price']").textContent()).trim()
        );

        const shipping = parseFloat(
            (await this.page.locator("//tr[td/span[contains(text(),'Shipping:')]]//span[@class='product-price']").textContent()).trim()
        );

        const tax = parseFloat(
            (await this.page.locator("//tr[td/span[contains(text(),'Tax:')]]//span[@class='product-price']").textContent()).trim()
        );

        const total = parseFloat(
            (await this.page.locator("//tr[td/span[contains(text(),'Total:')]]//span[contains(@class,'order-total')]").textContent()).trim()
        );

        // Assertion
        expect(total).toBeCloseTo(subtotal + shipping + tax, 2);

        console.log(
            ` Verified cart totals: Subtotal(${subtotal}) + Shipping(${shipping}) + Tax(${tax}) = Total(${total})`
        );
    }


    async verifyAddressOnConfirmation(expectedAddress) {
        const billingText = await this.page.locator('.billing-info').textContent();
        expect(billingText).toContain(expectedAddress.firstName);
        expect(billingText).toContain(expectedAddress.city);

        const shippingText = await this.page.locator('.shipping-info').textContent();
        expect(shippingText).toContain(expectedAddress.firstName);
        expect(shippingText).toContain(expectedAddress.city);
    }
    async validateOrderNumberFormat(orderNumber) {
        const regex = /^[0-9]{5,}$/; // e.g. "12345"
        expect(orderNumber).toMatch(regex);
    }





}

module.exports = { E2EPurchaseFlow };