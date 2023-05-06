import axios from 'axios';

import { toast } from 'react-hot-toast';
export const Logout = async (dispatch, router) => {
  window.localStorage.removeItem('user');
  const { data } = await axios.get('/api/logout');
  toast.success(data.message);
};

export const currencyFormatter = (data) => {
  return ((data.amount * 100) / 100).toLocaleString(data.currency, {
    style: 'currency',
    currency: data.currency,
  });
};

export const stripeCurrencyFormatter = (data) => {
  return (data.amount / 100).toLocaleString(data.currency, {
    style: 'currency',
    currency: data.currency,
  });
};

export const handleModuleChange = {
  edit: () => {
    console.log('edit module');
  },
  delete: () => {
    console.log('delete module');
    let allModules = values.modules;
    const removed = allModules.splice(index, 1);
    setValues({ ...values, modules: allModules });
  },
  form: (e) => {
    e.preventDefault();
    setModules([...modules, currentModule]);
    console.log('VALUES => ', values);
  },
  add: (e) => {
    e.preventDefault();
    console.log(e);
    setCurrentModule({ title: e.target.value });
    console.log(modules);
  },
  drag: (e, index) => {
    console.log('ON DRAG => ', 'EVENT _> ', e, 'INDEX =>', index);
    // e.dataTransfer.setData('itemIndex', index);
  },
  drop: async (e, index) => {
    console.log('ON DROP => ', index);
  },
};
