(function(){
  "use strict";
  const U=Pandao,E=ToolEditor,P=Planning;
  E.workbench({key:"cashflow",title:"现金流预算工具",icon:"↗",category:"资金计划",description:"编排月度收入和支出，查看月底余额与资金缺口。",repo:"https://github.com/tianchaodaxing-beep/pandao-cashflow",inputTitle:"月度预算",outputTitle:"资金预算",columns:[{label:"月份",key:"month",type:"month"},{label:"预计收入",key:"income",type:"number",default:0},{label:"预计支出",key:"expense",type:"number",default:0}],examples:[{month:"2026-10",income:20000,expense:25000},{month:"2026-11",income:15000,expense:28000},{month:"2026-12",income:40000,expense:22000}],parameters:[["期初余额","opening",15000,"number"],["最低预留金额","reserve",8000,"number"],["币种","currency","人民币"]],calculateLabel:"计算现金流",exportLabel:"导出现金流预算",compute:(rows,p)=>P.cashflow(rows,p.opening,p.reserve),export:(v,p)=>v.details.map(r=>({币种:p.currency,月份:r.month,月初余额:r.opening,预计收入:r.income,预计支出:r.expense,净流入:r.net,月底余额:r.closing,最低预留金额:v.reserve,状态:r.status})),view:(v,p)=>[
    U.metrics([["期末余额",U.money(v.closing),p.currency],["最低月底余额",U.money(v.lowest),p.currency],["首次低于预留",v.firstShortfall||"无","月份"]]),
    E.heading("月度收入"),E.bars(v.details.map(r=>({label:r.month,value:r.income}))),
    E.heading("月度余额"),E.table([{label:"月份",key:"month"},{label:"收入",value:r=>U.money(r.income),number:true},{label:"支出",value:r=>U.money(r.expense),number:true},{label:"月底余额",value:r=>U.money(r.closing),number:true},{label:"状态",key:"status"}],v.details)
  ]});
})();
