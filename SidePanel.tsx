import React, { useState } from 'react';
import type { Product, Language } from '../types';
import { ProductList } from './ProductList';
import { ShoppingList } from './ShoppingList';

interface SidePanelProps {
  products: Product[];
  onUpdateProduct: (product: Product) => void;
  shoppingList: number[];
  onToggleShoppingList: (productId: number) => void;
  onStartNavigation: () => void;
  onCancelNavigation: () => void;
  isNavigating: boolean;
  isShopkeeperMode: boolean;
  language: Language;
  t: (key: string) => string;
}

type Tab = 'products' | 'list';

export const SidePanel: React.FC<SidePanelProps> = (props) => {
  const [activeTab, setActiveTab] = useState<Tab>('products');

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg h-full flex flex-col">
      <div>
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('products')}
              className={`${
                activeTab === 'products'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}
            >
              {props.t('allProducts')}
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`${
                activeTab === 'list'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              {props.t('shoppingList')}
              {props.shoppingList.length > 0 && (
                <span className="ml-2 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {props.shoppingList.length}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
      <div className="flex-grow pt-5 overflow-hidden">
        {activeTab === 'products' ? (
          <ProductList {...props} />
        ) : (
          <ShoppingList {...props} />
        )}
      </div>
    </div>
  );
};
