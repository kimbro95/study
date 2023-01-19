import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

/*
 * Lazy Loading
 * import�� �������� ������Ʈ�� �߰� �� ��� app.js ���ٽ� ��� �������� ���� �ٿ�ε��Ѵ�.
 * ������ Lazy Loading�� ���� �� �������� ���ٽÿ� ������Ʈ�� �ٿ�ε� �ǵ��� React�� �����ش�.
 * ������ ȣ��� ��� �������� �ٿ�ε� �����ʾƵ� �Ǳ⿡ �ε� �ӵ��� ���� �� �� �ִ�.
 * ������Ʈ �ε��� �ð��� ���� �ɸ��� ��� Suspense ������Ʈ�� ���� fallback prop ���� ǥ�����ش�.
 */
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }>
        <Routes>
          <Route path='/' element={<Navigate replace to='/quotes' />} />
          <Route path='/quotes/*' element={<AllQuotes />} />
          <Route path='/quotes/:quoteId/*' element={<QuoteDetail />} />
          <Route path='/newQuote' element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
