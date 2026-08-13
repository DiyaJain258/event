import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Newspaper, Calendar, User, Filter, Search, ArrowRight, X } from 'lucide-react';

export const PublicNewsPage = () => {
  const { news } = useApp();
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredNews = news.filter((item) => {
    const matchesFilter =
      selectedFilter === 'ALL' ||
      (selectedFilter === 'NATIONAL' && (item.category?.includes('National') || item.author?.includes('National'))) ||
      (selectedFilter === 'STATE' && (item.category?.includes('State') || item.author?.includes('State'))) ||
      (selectedFilter === 'CLUB' && (item.category?.includes('Club') || item.author?.includes('Club')));

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="bg-forest-950 text-white rounded-3xl p-8 lg:p-12 border border-forest-800 shadow-2xl space-y-6">
        <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase bg-tan-500 text-forest-950 tracking-wider">
          Official Media & Bulletins
        </span>
        <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-white">
          News & Announcements
        </h1>
        <p className="text-xs sm:text-sm text-tan-200 max-w-2xl font-medium leading-relaxed">
          Stay updated with official bulletins, state trial guidelines, sanctioning updates, and local club announcements.
        </p>

        {/* Toolbar & Level Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-forest-800">
          <div className="flex items-center gap-1.5 bg-forest-900 p-1 rounded-2xl border border-forest-800">
            <button
              onClick={() => setSelectedFilter('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                selectedFilter === 'ALL' ? 'bg-tan-500 text-forest-950 shadow-md' : 'text-tan-200 hover:text-white'
              }`}
            >
              All News
            </button>
            <button
              onClick={() => setSelectedFilter('NATIONAL')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                selectedFilter === 'NATIONAL' ? 'bg-tan-500 text-forest-950 shadow-md' : 'text-tan-200 hover:text-white'
              }`}
            >
              National
            </button>
            <button
              onClick={() => setSelectedFilter('STATE')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                selectedFilter === 'STATE' ? 'bg-tan-500 text-forest-950 shadow-md' : 'text-tan-200 hover:text-white'
              }`}
            >
              State
            </button>
            <button
              onClick={() => setSelectedFilter('CLUB')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                selectedFilter === 'CLUB' ? 'bg-tan-500 text-forest-950 shadow-md' : 'text-tan-200 hover:text-white'
              }`}
            >
              Local Club
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-light" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news..."
              className="w-full pl-10 pr-3 py-2.5 text-xs bg-surface-lowest text-charcoal border border-surface-border rounded-xl font-semibold focus:outline-none focus:border-tan-500"
            />
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className="group bg-surface-lowest rounded-2xl border border-surface-border shadow-ambient overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-tan-500/60 transition-all duration-300"
          >
            <div className="space-y-4">
              {item.image && (
                <div className="relative h-48 overflow-hidden bg-forest-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-black uppercase bg-forest-950/90 text-tan-300 backdrop-blur-md border border-forest-800">
                    {item.category}
                  </span>
                </div>
              )}

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-[11px] text-tan-700 font-bold">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {item.author}</span>
                </div>
                <h3 className="font-black text-lg text-forest-950 group-hover:text-tan-700 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-medium line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedArticle(item)}
                className="w-full py-2.5 bg-surface-low hover:bg-forest-900 text-forest-950 hover:text-white font-black text-xs rounded-xl border border-surface-border transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-surface-lowest rounded-3xl border border-surface-border shadow-2xl max-w-2xl w-full overflow-hidden space-y-6 p-6 lg:p-8">
            <div className="flex items-center justify-between border-b border-surface-border pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-tan-500 text-forest-950">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl font-black text-forest-950 mt-1">{selectedArticle.title}</h3>
                <div className="text-xs text-charcoal-muted mt-0.5">{selectedArticle.date} • By {selectedArticle.author}</div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 text-charcoal-muted hover:text-charcoal rounded-xl bg-surface-low"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedArticle.image && (
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-56 object-cover rounded-2xl" />
            )}

            <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-medium">
              {selectedArticle.summary}
            </p>

            <div className="pt-4 border-t border-surface-border flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-forest-900 text-white font-black text-xs rounded-xl shadow"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
