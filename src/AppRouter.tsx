import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DamageSelectorPage = lazy(() => import("./pages/DamageSelectorPage"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="damage" element={<DamageSelectorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
