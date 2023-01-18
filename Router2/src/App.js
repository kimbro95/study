import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

/*
 * Lazy Loading
 * import로 페이지나 컴포넌트를 추가 할 경우 app.js 접근시 모든 페이지를 먼저 다운로드한다.
 * 하지만 Lazy Loading을 사용시 그 페이지에 접근시에 컴포넌트가 다운로드 되도록 React가 도와준다.
 * 페이지 호출시 모든 페이지를 다운로드 하지않아도 되기에 로딩 속도를 개선 할 수 있다.
 * 컴포넌트 로딩시 시간이 오래 걸리는 경우 Suspense 컴포넌트를 통해 fallback prop 으로 표시해준다.
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
