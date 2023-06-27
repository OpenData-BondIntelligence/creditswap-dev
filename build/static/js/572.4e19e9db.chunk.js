"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[572],{75572:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var a={messages:{Accept:"\u63a5\u53d7",Acknowledge:"\u786e\u8ba4",Allow:"\u5141\u8bb8","Allow in your wallet":"\u5141\u8bb8\u5728\u4f60\u7684\u94b1\u5305\u91cc","Allow {0} first":["\u5148\u5141\u8bb8 ",["0"]],"Allowance pending":"\u5f85\u5b9a\u6d25\u8d34","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u5c1d\u8bd5\u6267\u884c\u6b64\u5151\u6362\u65f6\u53d1\u751f\u9519\u8bef\u3002\u60a8\u53ef\u80fd\u9700\u8981\u589e\u52a0\u6ed1\u70b9\u9650\u5236\u3002\u5982\u679c\u8fd8\u662f\u4e0d\u884c\uff0c\u5219\u53ef\u80fd\u662f\u60a8\u6b63\u5728\u4ea4\u6613\u7684\u4ee3\u5e01\u4e0eUniswap\u4e0d\u517c\u5bb9\u3002\u6ce8\uff1aUniswap V3\u4e0d\u517c\u5bb9\u8f6c\u8d26\u65f6\u5e26\u6263\u9664\u8d39\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e01\u548c\u5f39\u6027\u4f9b\u5e94\uff08rebase\uff09\u4ee3\u5e01\u3002","Approval pending":"\u7b49\u5f85\u6279\u51c6",Approve:"\u6279\u51c6","Approve in your wallet":"\u5728\u60a8\u7684\u94b1\u5305\u4e2d\u6279\u51c6","Approve {0} first":["\u5148\u6388\u6743 ",["0"]],Auto:"\u81ea\u52a8","Auto Router":"\u81ea\u52a8\u8def\u7531",Close:"\u5173\u95ed","Confirm in your wallet":"\u5728\u4f60\u7684\u94b1\u5305\u4e2d\u786e\u8ba4","Confirm swap":"\u786e\u8ba4\u4ea4\u6613","Connect wallet to swap":"\u8fde\u63a5\u94b1\u5305\u4ee5\u5151\u6362","Connecting\u2026":"\u8fde\u63a5\u2026","Convert {0} to {1}":["\u5c06 ",["0"]," \u8f6c\u6362\u4e3a ",["1"]],Dismiss:"\u5173\u95ed","Enter an amount":"\u8f93\u5165\u6570\u989d","Error details":"\u9519\u8bef\u8be6\u60c5","Error fetching trade":"\u83b7\u53d6\u4ea4\u6613\u65f6\u51fa\u9519","Fetching best price\u2026":"\u6b63\u5728\u83b7\u53d6\u6700\u4f18\u5151\u6362\u7387...",For:"\u8d5e\u6210","High price impact":"\u5bf9\u5151\u6362\u7387\u6709\u9ad8\u5ea6\u5f71\u54cd","High slippage":"\u9ad8\u6ed1\u70b9","High slippage increases the risk of price movement":"\u9ad8\u6ed1\u70b9\u4f1a\u589e\u52a0\u5151\u6362\u7387\u6ce2\u52a8\u98ce\u9669","Insufficient liquidity in the pool for your trade":"\u4f60\u4ea4\u6613\u7684\u5e01\u5bf9\u6d41\u52a8\u6027\u4e0d\u8db3","Insufficient {0} balance":[["0"]," \u4f59\u989d\u4e0d\u8db3"],"Invalid recipient":"\u65e0\u6548\u7684\u63a5\u6536\u65b9","Liquidity provider fee":"\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u8d39\u7528",Max:"\u6700\u5927\u503c","Max slippage":"\u6700\u5927\u6ed1\u70b9","Maximum sent":"\u53d1\u9001\u7684\u6700\u5927\u503c","Minimum received":"\u6536\u5230\u7684\u6700\u4f4e\u6570\u989d","Missing dependencies":"\u7f3a\u5c11\u4f9d\u8d56\u5957\u4ef6","Mock Toggle":"\u6a21\u62df\u5207\u6362","No results found.":"\u672a\u627e\u5230\u7ed3\u679c\u3002","No tokens are available on this network. Please switch to another network.":"\u6b64\u7f51\u7edc\u4e0a\u6ca1\u6709\u53ef\u7528\u7684\u4ee4\u724c\u3002\u8bf7\u5207\u6362\u5230\u53e6\u4e00\u4e2a\u7f51\u7edc\u3002",OFF:"\u5173\u95ed",ON:"\u5f00\u542f","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["\u4f30\u8ba1\u8f93\u51fa\u3002\u60a8\u5c06\u6536\u5230\u81f3\u5c11 ",["0"]," ",["1"]," \u6216\u4ea4\u6613\u5c06\u6062\u590d\u3002"],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["\u4f30\u8ba1\u8f93\u51fa\u3002\u60a8\u6700\u591a\u53d1\u9001 ",["0"]," ",["1"]," \u6216\u4ea4\u6613\u5c06\u6062\u590d\u3002"],"Please enter a valid slippage %":"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6ed1\u70b9\u767e\u5206\u6bd4","Powered by the Uniswap protocol":"\u7531 Uniswap \u534f\u8bae\u63d0\u4f9b\u652f\u6301","Price impact":"\u5151\u6362\u7387\u5f71\u54cd","Price updated":"\u5151\u6362\u7387\u5df2\u66f4\u65b0","Recent transactions":"\u6700\u8fd1\u7684\u4ea4\u6613","Reload the page":"\u91cd\u65b0\u52a0\u8f7d\u9875\u9762",Reset:"\u91cd\u7f6e","Review swap":"\u68c0\u67e5\u4ea4\u6613","Search by token name or address":"\u6309\u4ee3\u5e01\u540d\u79f0\u6216\u5730\u5740\u641c\u7d22","Select a token":"\u9009\u62e9\u4ee3\u5e01",Settings:"\u8bbe\u7f6e","Slippage tolerance":"\u6ed1\u70b9\u5bb9\u5dee","Something went wrong.":"\u51fa\u95ee\u9898\u4e86\u3002",Swap:"\u5151\u6362","Swap confirmed":"\u4ea4\u6613\u5df2\u786e\u8ba4","Swap details":"\u4ea4\u6613\u8be6\u60c5","Swap failed: {0}":["\u5151\u6362\u5931\u8d25\uff1a ",["0"]],"Swap pending":"\u4ea4\u6613\u5904\u7406\u4e2d","Swap summary":"\u4ea4\u6613\u6458\u8981","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"\u5151\u6362\u4ea4\u6613\u4e0d\u6ee1\u8db3 Uniswap \u4e0d\u53d8\u91cf X \xd7 Y = K \u7684\u8981\u6c42\u3002\u8fd9\u901a\u5e38\u610f\u5473\u7740\u60a8\u8981\u5151\u6362\u7684\u4ee3\u5e01\u4e4b\u4e00\u5728\u4ee3\u5e01\u8f6c\u8d26\u8fc7\u7a0b\u4e2d\u5e26\u6709\u4e00\u4e9b\u81ea\u5b9a\u4e49\u4ee3\u5e01\u5408\u7ea6\u7279\u6027\u3002","The input token cannot be transferred. There may be an issue with the input token.":"\u8f93\u5165\u4ee3\u5e01\u65e0\u6cd5\u8fdb\u884c\u8f6c\u8d26\u3002\u8f93\u5165\u4ee3\u5e01\u53ef\u80fd\u6709\u4e9b\u95ee\u9898\u3002","The output token cannot be transferred. There may be an issue with the output token.":"\u8f93\u51fa\u4ee3\u5e01\u65e0\u6cd5\u8fdb\u884c\u8f6c\u8d26\u3002\u8f93\u51fa\u4ee3\u5e01\u53ef\u80fd\u6709\u4e9b\u95ee\u9898\u3002","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u65e0\u6cd5\u5bf9\u8f93\u51fa\u4ee3\u5e01\u8fdb\u884c\u8f6c\u8d26\u3002\u8f93\u51fa\u4ee3\u5e01\u53ef\u80fd\u6709\u4e9b\u95ee\u9898\u3002\u6ce8\uff1a\u8f6c\u8d26\u65f6\u989d\u5916\u62bd\u53d6\u8d39\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e01\u548c\u5f39\u6027\u4f9b\u5e94\uff08rebase\uff09\u4ee3\u5e01\u90fd\u4e0eUniswap V3\u4e0d\u517c\u5bb9\u3002","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"\u7531\u4e8e\u671f\u9650\u5df2\u8fc7\uff0c\u56e0\u6b64\u65e0\u6cd5\u53d1\u9001\u4ea4\u6613\u3002\u8bf7\u68c0\u67e5\u60a8\u7684\u4ea4\u6613\u622a\u6b62\u671f\u9650\u8bbe\u7f6e\u3002","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u7531\u4e8e\u5151\u6362\u7387\u53d8\u52a8\uff0c\u6b64\u4ea4\u6613\u5c06\u4e0d\u4f1a\u6210\u529f\u3002\u5c1d\u8bd5\u589e\u52a0\u60a8\u7684\u6ed1\u70b9\u5bb9\u5dee\u3002\u6ce8\uff1a\u8f6c\u8d26\u65f6\u989d\u5916\u62bd\u53d6\u8d39\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e01\u548c\u5f39\u6027\u4f9b\u5e94\uff08rebase\uff09\u4ee3\u5e01\u90fd\u4e0eUniswap V3\u4e0d\u517c\u5bb9\u3002","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"\u7531\u4e8e\u5151\u6362\u7387\u53d8\u52a8\u6216\u4ee3\u5e01\u5e26\u6709\u8f6c\u8d26\u65f6\u7684\u6263\u9664\u8d39\u7528\uff08fee-on-transfer\uff09\uff0c\u8be5\u4ea4\u6613\u5c06\u4e0d\u4f1a\u6210\u529f\u3002\u8bf7\u5c1d\u8bd5\u589e\u52a0\u6ed1\u70b9\u5bb9\u5dee\u3002","Transaction confirmed":"\u4ea4\u6613\u5df2\u786e\u8ba4","Transaction deadline":"\u4ea4\u6613\u622a\u6b62\u671f\u9650","Transaction pending":"\u4ea4\u6613\u7b49\u5f85\u4e2d","Transaction rejected.":"\u4ea4\u6613\u88ab\u62d2\u7edd\u3002","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"\u53ef\u4ee5\u5c1d\u8bd5\u589e\u52a0\u6ed1\u70b9\u5bb9\u5dee\u3002<0/>\u6ce8\uff1a\u8f6c\u8d26\u65f6\u989d\u5916\u62bd\u53d6\u8d39\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e01\u548c\u5f39\u6027\u4f9b\u5e94\uff08rebase\uff09\u4ee3\u5e01\u90fd\u4e0eUniswap V3\u4e0d\u517c\u5bb9\u3002","Unexpected error. Could not estimate gas for the swap.":"\u9519\u8bef\u3002\u65e0\u6cd5\u4f30\u8ba1\u5151\u6362\u6240\u9700\u7684gas\u3002","Unexpected issue with estimating the gas. Please try again.":"\u4f30\u8ba1 gas \u65f6\u9047\u5230\u95ee\u9898\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["\u672a\u77e5\u9519\u8bef",["0"],"\u3002\u53ef\u4ee5\u5c1d\u8bd5\u589e\u52a0\u6ed1\u70b9\u5bb9\u5dee\u3002\u6ce8\uff1a\u8f6c\u8d26\u65f6\u989d\u5916\u62bd\u53d6\u8d39\u7528\uff08fee-on-transfer\uff09\u7684\u4ee3\u5e01\u548c\u5f39\u6027\u4f9b\u5e94\uff08rebase\uff09\u4ee3\u5e01\u90fd\u4e0eUniswap V3\u4e0d\u517c\u5bb9\u3002"],"Unsupported network - switch to another to trade":"\u4e0d\u652f\u6301\u7684\u7f51\u7edc - \u5207\u6362\u5230\u53e6\u4e00\u4e2a\u8fdb\u884c\u4ea4\u6613","Unwrap confirmed":"\u4ea4\u6613\u5df2\u786e\u8ba4","Unwrap pending":"\u4ea4\u6613\u5904\u7406\u4e2d","Unwrap {0}":["\u5c55\u5f00 ",["0"]],"View on Etherscan":"\u5728 Etherscan \u4e0a\u67e5\u770b","Wrap confirmed":"\u4ea4\u6613\u5df2\u786e\u8ba4","Wrap pending":"\u4ea4\u6613\u5904\u7406\u4e2d","Wrap {0}":["\u6362\u884c ",["0"]],"Your transaction will revert if it has been pending for longer than this period of time.":"\u5982\u679c\u60a8\u7684\u4ea4\u6613\u5f85\u5904\u7406\u7684\u65f6\u95f4\u8d85\u8fc7\u6b64\u65f6\u95f4\u6bb5\uff0c\u4f1a\u5c06\u56de\u6eda\u3002","Your transaction will revert if the price changes unfavorably by more than this percentage.":"\u5982\u679c\u5151\u6362\u7387\u53d8\u52a8\u8d85\u8fc7\u6b64\u767e\u5206\u6bd4\uff0c\u5219\u5c06\u8fd8\u539f\u8be5\u4ea4\u6613\u3002",minutes:"\u5206\u949f","{0, plural, =1 {Best route via 1 hop} other {Best route via # hops}}":[["0","plural",{1:"\u901a\u8fc7 1 \u8df3\u7684\u6700\u4f73\u8def\u7ebf",other:["\u901a\u8fc7","#"," hops \u7684\u6700\u4f73\u8def\u7ebf"]}]],"{integrator} fee":[["integrator"]," \u8d39\u7528"],"{min}m {sec}s":[["min"],"\u5206 ",["sec"],"\u79d2"],"{sec}s":[["sec"],"\u79d2"]}}}}]);
//# sourceMappingURL=572.4e19e9db.chunk.js.map