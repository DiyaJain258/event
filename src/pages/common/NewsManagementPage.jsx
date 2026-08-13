import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DataTable } from '../../components/common/DataTable';
import { Modal } from '../../components/common/Modal';
import { Newspaper, Plus, Tag, Calendar, User, Eye, Trash2 } from 'lucide-react';

export const NewsManagementPage = () => {
  const { news = [], addNews, showToast } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'National News',
    author: '',
    summary: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    addNews(formData);
    setModalOpen(false);
    setFormData({ title: '', category: 'National News', author: '', summary: '' });
  };

  const columns = [
    {
      header: 'Article Title',
      accessor: 'title',
      render: (r) => (
        <div>
          <div className="font-extrabold text-charcoal text-sm">{r.title}</div>
          <div className="text-[11px] text-charcoal-muted line-clamp-1 mt-0.5">{r.summary}</div>
        </div>
      )
    },
    {
      header: 'Category',
      accessor: 'category',
      render: (r) => (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-forest-100 text-forest-900 border border-forest-300">
          {r.category}
        </span>
      )
    },
    { header: 'Author', accessor: 'author' },
    { header: 'Published Date', accessor: 'date' },
    {
      header: 'Action',
      accessor: 'id',
      render: (r) => (
        <button
          onClick={() => showToast(`Opening article: "${r.title}"`, 'info')}
          className="px-2.5 py-1 bg-surface-low hover:bg-surface-container text-forest-800 font-bold text-xs rounded border flex items-center gap-1"
        >
          <Eye className="w-3.5 h-3.5" /> Read
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-forest-800 tracking-tight">News & Press Releases</h1>
          <p className="text-xs text-charcoal-muted mt-0.5">Manage and publish official news articles for members and clubs</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-tan-500 hover:bg-tan-600 text-forest-900 font-extrabold text-xs rounded-lg shadow flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Publish New Article
        </button>
      </div>

      <DataTable
        columns={columns}
        data={news}
        searchPlaceholder="Search news by title, category, author..."
        filterField="category"
        filterOptions={['National News', 'State News', 'Club News', 'Trial Updates']}
      />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Publish News Article">
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-charcoal mb-1">Article Title</label>
            <input
              type="text"
              required
              placeholder="e.g. 2026 Fall Championship Details"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 bg-surface-low border rounded focus:border-forest-800 font-medium"
            />
          </div>

          <div>
            <label className="block font-bold text-charcoal mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 bg-surface-low border rounded focus:border-forest-800 font-medium"
            >
              <option value="National News">National News</option>
              <option value="State News">State News</option>
              <option value="Club News">Club News</option>
              <option value="Trial Updates">Trial Updates</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-charcoal mb-1">Author / Publisher</label>
            <input
              type="text"
              placeholder="e.g. Association Headquarters"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-3 py-2 bg-surface-low border rounded focus:border-forest-800 font-medium"
            />
          </div>

          <div>
            <label className="block font-bold text-charcoal mb-1">Summary / Excerpt</label>
            <textarea
              rows={3}
              required
              placeholder="Provide a brief preview of the news article..."
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              className="w-full px-3 py-2 bg-surface-low border rounded focus:border-forest-800 font-medium"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 text-charcoal font-bold hover:bg-surface-low rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-forest-800 hover:bg-forest-900 text-white font-extrabold rounded-lg shadow"
            >
              Publish Article
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
