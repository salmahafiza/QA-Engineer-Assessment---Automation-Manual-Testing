import { test, expect } from '@playwright/test';
const { E2EPurchaseFlow } = require('../pages/E2E Purchase Flow');
const { Users, Product, BillingAddress, ShippingAddress, loginData, creditCardDetails } = require('../test-data/E2E Purchase Flow');

let e2e;

test.beforeEach(async ({ page }) => {
  e2e = new E2EPurchaseFlow(page);
  await e2e.accessApplication();
  await e2e.verifyHomePageTitle();
});

test('TC_PURCHASE_002: Register a new user with unique email & password, then log in', async () => {
  const user = Users[0];
  await e2e.clickRegisterLink();
  await e2e.radioButtonGenderFemale.check();
  await e2e.EnterFirstName(user.firstName);
  await e2e.EnterLastName(user.lastName);
  await e2e.EnterEmail(user.email);
  await e2e.EnterPassword(user.password);
  await e2e.EnterConfirmPassword(user.confirmPassword);
  await e2e.ClickRegisterButton();
  await e2e.verifySuccessfulRegistration();
});

test('TC_PURCHASE_003: Navigate to "14.1-inch Laptop" under Computers > Notebooks', async () => {
  await e2e.login(loginData.email, loginData.password)
  await e2e.clickOnCategory(Product.category);
  await e2e.clickOnSubCategory(Product.subCategory);
  await e2e.verifyPageTitle(Product.subCategory);
  await e2e.clickOnAddToCartButton();
  await e2e.navigateToShoppingCart();
  await e2e.verifyProductDetailsAcrossFlow(Product.productName,Product.productPrice );

});

test('TC_PURCHASE_004: Add product to cart and verify cart badge shows correct quantity', async () => {
  await e2e.login(loginData.email, loginData.password);
  await e2e.clickOnCategory(Product.category);
  await e2e.clickOnSubCategory(Product.subCategory);
  await e2e.clickOnAddToCartButton();
  await e2e.clickOnAddToCartButton();
  await e2e.navigateToShoppingCart();
  await e2e.verifyItemAddedToCart(1);

});

test('TC_PURCHASE_005:  Proceed to checkout', async () => {
  await e2e.login(loginData.email, loginData.password);
  await e2e.clickOnCategory(Product.category);
  await e2e.clickOnSubCategory(Product.subCategory);
  await e2e.clickOnAddToCartButton();
  await e2e.navigateToShoppingCart();
  await e2e.acceptTermsAndConditions();
  await e2e.clickOnCheckoutButton();
});

test('TC_PURCHASE_006:Complete billing/shipping details (use dummy data)', async () => {
  await e2e.login(loginData.email, loginData.password);
  await e2e.clickOnCategory(Product.category);
  await e2e.clickOnSubCategory(Product.subCategory);
  await e2e.clickOnAddToCartButton();
  await e2e.navigateToShoppingCart();
  await e2e.verifyCartTotals();
  await e2e.acceptTermsAndConditions();
  await e2e.clickOnCheckoutButton();
  await e2e.selectAddNewAddress();
  await e2e.fillBillingAddress(BillingAddress);
  await e2e.clickContinue();
  await e2e.clickContinueShippingSave();
  await e2e.selectShippingMethod('Ground (0.00)');  // Options: Ground, Next Day Air, Second Day Air
  await e2e.clickContinueShippingMethod();
  await e2e.selectPaymentMethod('Credit Card');
  // Options: Cash On Delivery (COD) (7.00), Check / Money Order (5.00), Credit Card, Purchase Order
  await e2e.clickContinuePaymentMethod();
  await e2e.PaymentViaCreditCard(creditCardDetails);
  await e2e.ContinueViaCard();
  await e2e.confirm();
  //await expect (page.locator("//h2[normalize-space()='Payment information']")).toBeVisible();
  //await checkout.COD_confirmationText();
  //await checkout. ContinuePayment();
  await e2e.clickConfirmOrder();
  await e2e.OrderConfirmationMsg();
  await e2e.clickContinueLastBtn();

});

test('TC_PURCHASE_007:Select shipping and payment methods', async () => {
  await e2e.login(loginData.email, loginData.password);
  await e2e.clickOnCategory(Product.category);
  await e2e.clickOnSubCategory(Product.subCategory);
  await e2e.clickOnAddToCartButton();
  await e2e.navigateToShoppingCart();
  await e2e.acceptTermsAndConditions();
  await e2e.clickOnCheckoutButton();
  await e2e.selectAddNewAddress();
  await e2e.fillBillingAddress(BillingAddress);
  await e2e.clickContinue();
  await e2e.clickContinueShippingSave();
  await e2e.selectShippingMethod('Ground (0.00)');  // Options: Ground, Next Day Air, Second Day Air
  await e2e.clickContinueShippingMethod();
  await e2e.selectPaymentMethod('Credit Card');
  // Options: Cash On Delivery (COD) (7.00), Check / Money Order (5.00), Credit Card, Purchase Order
  await e2e.clickContinuePaymentMethod();
  await e2e.PaymentViaCreditCard(creditCardDetails);
  await e2e.ContinueViaCard();
  await e2e.confirm();
  //await expect (page.locator("//h2[normalize-space()='Payment information']")).toBeVisible();
  //await checkout.COD_confirmationText();
  //await checkout. ContinuePayment();
  await e2e.clickConfirmOrder();
  await e2e.OrderConfirmationMsg();
  await e2e.clickContinueLastBtn();
});

test('TC_PURCHASE_008: Complete the order', async () => {
  await e2e.login(loginData.email, loginData.password);
  await e2e.clickOnCategory(Product.category);
  await e2e.clickOnSubCategory(Product.subCategory);
  await e2e.clickOnAddToCartButton();
  await e2e.navigateToShoppingCart();
  await e2e.acceptTermsAndConditions();
  await e2e.clickOnCheckoutButton();
  await e2e.selectAddNewAddress();
  await e2e.fillBillingAddress(BillingAddress);
  await e2e.clickContinue();
  await e2e.clickContinueShippingSave();
  await e2e.selectShippingMethod('Ground (0.00)');  // Options: Ground, Next Day Air, Second Day Air
  await e2e.clickContinueShippingMethod();
  await e2e.selectPaymentMethod('Credit Card');
  // Options: Cash On Delivery (COD) (7.00), Check / Money Order (5.00), Credit Card, Purchase Order
  await e2e.clickContinuePaymentMethod();
  await e2e.PaymentViaCreditCard(creditCardDetails);
  await e2e.ContinueViaCard();
  await e2e.confirm();
  //await expect (page.locator("//h2[normalize-space()='Payment information']")).toBeVisible();
  //await checkout.COD_confirmationText();
  //await checkout. ContinuePayment();
  await e2e.clickConfirmOrder();
  await e2e.OrderConfirmationMsg();
  await e2e.clickContinueLastBtn();
});

test('TC_PURCHASE_009: Validate "Thank you" page and capture Order Number', async () => {
  await e2e.login(loginData.email, loginData.password);
  await e2e.clickOnCategory(Product.category);
  await e2e.clickOnSubCategory(Product.subCategory);
  await e2e.clickOnAddToCartButton();
  await e2e.navigateToShoppingCart();
  await e2e.acceptTermsAndConditions();
  await e2e.clickOnCheckoutButton();
  await e2e.selectAddNewAddress();
  await e2e.fillBillingAddress(BillingAddress);
  await e2e.clickContinue();
  await e2e.clickContinueShippingSave();
  await e2e.selectShippingMethod('Ground (0.00)');  // Options: Ground, Next Day Air, Second Day Air
  await e2e.clickContinueShippingMethod();
  await e2e.selectPaymentMethod('Credit Card');
  // Options: Cash On Delivery (COD) (7.00), Check / Money Order (5.00), Credit Card, Purchase Order
  await e2e.clickContinuePaymentMethod();
  await e2e.PaymentViaCreditCard(creditCardDetails);
  await e2e.ContinueViaCard();
  await e2e.confirm();
  //await expect (page.locator("//h2[normalize-space()='Payment information']")).toBeVisible();
  //await checkout.COD_confirmationText();
  //await checkout. ContinuePayment();
  await e2e.clickConfirmOrder();
  await e2e.OrderConfirmationMsg();
  await e2e.getOrderDetails();
  await e2e.clickContinueLastBtn();

});
