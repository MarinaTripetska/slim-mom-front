import DiaryPage from "./components/DiaryPage/DiaryPage";
import { useState } from 'react';
import Modal from 'components/Modal';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
import Toaster from 'components/Toasts';
// import Loader from './components/Loader';


function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <p>SlimMom START TEST!</p>
      <DiaryPage/>   {/* Обернуть в приватный Route */}
    </div>
  );
}

export default App;
