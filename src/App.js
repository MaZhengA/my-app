import { useState, lazy, Suspense } from 'react';
import Loading from './Loading';

export default function MarkdownEditor() {
  const [ markdown, setMarkdown ] = useState('hello markdown');
  const [ showMarkdown, setShowMarkdown ] = useState(false);
  const LazyMarkdown = lazy(() => delayForDemo(import('./MarkdownPreview')));
  return (
    <>
      <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
      <br/>
      <label>
        <input type='checkbox' onChange={(e) => setShowMarkdown(e.target.checked)} />
        Show Preview
      </label>
      <hr/>
      {showMarkdown && <Suspense fallback={<Loading />}>
        <h2>Preview</h2>
        <LazyMarkdown markdown={markdown} />
      </Suspense>}
    </>
  )
}

// 添加一个固定的延迟时间，以便你可以看到加载状态
function delayForDemo (promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  }).then(() => promise)
}