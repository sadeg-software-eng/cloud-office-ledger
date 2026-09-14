import React from 'react';

export default function Page() {
  // الحسبة المالية المحدثة لملف عيلتك البطلة (البشمهندس عبدالصادق اعريبي)
  const monthlySalary = 6500; // راتب مهندس برمجيات كندي مبتدئ/متوسط
  const ccbBenefit = 1200;    // منحة الأطفال الكندية المضمونة لعيلتك الكبيرة
  const totalIncome = monthlySalary + ccbBenefit;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold text-emerald-400 mb-2">BüroFinanz JS</h1>
        <p className="text-slate-400 text-sm mb-6">Cloud Ledger & Office Management</p>
        
        <div className="border-t border-slate-700 my-4 pt-4 text-left space-y-3">
          <div className="flex justify-between">
            <span className="text-slate-400">Software Engineer Salary:</span>
            <span className="font-bold text-emerald-400">${monthlySalary} CAD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Canada Child Benefit:</span>
            <span className="font-bold text-emerald-400">${ccbBenefit} CAD</span>
          </div>
          <div className="border-t border-slate-700 my-2 pt-2 flex justify-between text-lg font-extrabold">
            <span>Total Monthly Income:</span>
            <span className="text-emerald-300">${totalIncome} CAD</span>
          </div>
        </div>

                                     <p className="text-xs text-slate-500 mt-6 italic">Secure framework ready for Alberta tech and STEM pathway integration.</p>
      </div>
    </div>
  );
}
