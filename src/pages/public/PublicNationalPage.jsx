import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, ShieldCheck } from 'lucide-react';

export const PublicNationalPage = () => {
  const { products, addToCart, showToast } = useApp();

  const nationalProducts = products.filter(
    (p) => p.scopeChannel === 'NATIONAL' || p.organizationType === 'NATIONAL'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 lg:p-10 border border-forest-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
            🏠 National Headquarters Store
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
            Official National Products
          </h1>
          <p className="text-xs sm:text-sm text-tan-200 font-medium max-w-xl">
            Exclusive official gear, tracking equipment, and apparel straight from UHC National Headquarters.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-forest-900 border border-forest-700 rounded-xl text-tan-300 text-xs font-bold shrink-0">
          <ShieldCheck className="w-4 h-4 text-tan-400" />
          <span>Sanctioned National Gear</span>
        </div>
      </div>

      {/* Products Grid ONLY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {nationalProducts.map((product) => (
          <div
            key={product.id}
            className="bg-surface-lowest rounded-2xl border border-surface-border shadow-ambient overflow-hidden group hover:shadow-xl hover:border-tan-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden h-48 bg-surface-low">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-forest-950/80 text-tan-300 text-[9px] font-black uppercase backdrop-blur-sm">
                {product.category}
              </span>
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-tan-500 text-forest-950 text-[9px] font-black uppercase shadow-md">
                National
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between gap-4">
              <div>
                <h3 className="font-black text-base text-charcoal leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-charcoal-muted mt-1.5 line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="pt-3 border-t border-surface-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-muted font-bold block uppercase tracking-wider">Retail Price</span>
                  <span className="text-xl font-black text-forest-800">
                    ${product.price.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => {
                    addToCart(product, 1);
                    showToast(`${product.name} added to cart!`, 'success');
                  }}
                  className="px-4 py-2 rounded-xl bg-forest-900 hover:bg-forest-950 text-white text-xs font-black flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
