"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          //탭 전환해서 돌아올 경우 데이터 새로 가져오겠다
          refetchOnWindowFocus: false,
          //페이지 이동시 컴포넌트 데이터를 다시 가져오게
          retryOnMount: true,
          //인터넷 연결이 끊겻다 다시 연결되었을떄 다시 가져오기
          refetchOnReconnect: false,
          //데이터 가져오기 실패했을떄
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      />
    </QueryClientProvider>
  );
}

export default RQProvider;
