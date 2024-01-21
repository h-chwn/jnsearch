import axios from 'axios';
import * as React from 'react';
import './style.css';
import { useStaticStore } from './store';
import { Item, SearchResult } from './types';

export default function App() {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState([] as Item[]);
  const [searchText, setSearchText] = useStaticStore((v) => [
    v.searchText,
    v.setSearchText,
  ]);
  const handleSearch = async () => {
    try {
      setLoading(true);
      setResult([]);
      const { data } = await axios.post(
        'https://search-api.joongna.com/v3/search/all',
        {
          searchWord: searchText,
          page: 0,
        }
      );
      const items = (data as SearchResult).data.items;
      console.log(data);
      setResult(items);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
        <h1>JNSearch</h1>
        <p>by chhwang</p>
      </div>
      <div style={{ display: 'flex', gap: 3 }}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            e.key === 'Enter' && handleSearch();
          }}
        />
        <button onClick={handleSearch}>{loading ? 'Loading' : 'Search'}</button>
      </div>

      {result.length > 0 && (
        <div
          style={{
            border: '1px solid black',
            borderRadius: 5,
            padding: 10,
            marginTop: 10,
          }}
        >
          {result.map((m) => {
            return (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <div style={{ minWidth: 180 }}>[{m.sortDate}]</div>
                <a
                  href={'https://web.joongna.com/product/' + m.seq}
                  target={'_blank'}
                >
                  {m.title}
                </a>
                <div
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: 5,
                    fontWeight: 'bold',
                    padding: 5,
                  }}
                >
                  {m.price.toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
