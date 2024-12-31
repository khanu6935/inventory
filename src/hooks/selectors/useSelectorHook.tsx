import { useSelector } from "react-redux";

// ////////////////Auth Selector/////////////////////
export const useAuthSelector = () => {
  return useSelector((state: any) => {
    const { authLoading, error, user, registerUser } = state.AuthPage;
    return {
      authLoading,
      error,
      user,
      registerUser,
    };
  });
};

export const useHomePageSelector = () => {
  return useSelector((state: any) => {
    const {
      user,
      inventory,
      products,
      inventoryById,
      productById,
      loading,
      error,
      warehouse,
      itemsInWareHouse
    } = state.HomePage;

    return {
      user,
      inventory,
      products,
      inventoryById,
      productById,
      loading,
      error,
      warehouse,
      itemsInWareHouse
    };
  });
};


