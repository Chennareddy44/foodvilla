import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded properly or not
  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // check if the user is online or not
  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("✅");
});

test("cart should have zero items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // cart items should be zero on render
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 0 Items");
});
