
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { CreditCard, Download, ShoppingCart } from 'lucide-react';

const Purchases = () => {
  // Mock purchase history data
  const purchases = [
    {
      id: 'ord_123456',
      courseId: '1',
      courseName: 'Forex Trading Fundamentals',
      date: 'Mar 15, 2024',
      amount: 89.99,
      paymentMethod: 'Visa ending in 4242',
      status: 'completed',
      receiptUrl: '#'
    },
    {
      id: 'ord_123457',
      courseId: '2',
      courseName: 'Advanced Stock Market Strategies',
      date: 'Feb 28, 2024',
      amount: 129.99,
      paymentMethod: 'PayPal',
      status: 'completed',
      receiptUrl: '#'
    },
    {
      id: 'ord_123458',
      courseId: '3',
      courseName: 'Cryptocurrency Trading Essentials',
      date: 'Feb 10, 2024',
      amount: 99.99,
      paymentMethod: 'Mastercard ending in 5555',
      status: 'completed',
      receiptUrl: '#'
    }
  ];
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Purchase History</h1>
        <p className="text-gray-400">View your course purchase history and download receipts</p>
      </div>
      
      {purchases.length === 0 ? (
        <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800">
          <ShoppingCart className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No purchases yet</h3>
          <p className="text-gray-400 mb-6">You haven't purchased any courses yet.</p>
          <Button className="bg-secondary text-primary hover:bg-secondary/90">
            Browse Courses
          </Button>
        </div>
      ) : (
        <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-950/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Payment Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {purchases.map((purchase) => (
                  <tr key={purchase.id} className="hover:bg-gray-900/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{purchase.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">{purchase.courseName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{purchase.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${purchase.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <div className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-2 text-secondary" />
                        {purchase.paymentMethod}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {purchase.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      <div className="mt-8 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Payment Methods</h2>
        <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg bg-gray-900/50 mb-4">
          <div className="flex items-center">
            <div className="bg-gray-800 rounded-full p-2 mr-4">
              <CreditCard className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-white font-medium">Visa ending in 4242</p>
              <p className="text-sm text-gray-400">Expires 04/2025</p>
            </div>
          </div>
          <div>
            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-secondary/20 text-secondary">
              Default
            </span>
          </div>
        </div>
        
        <Button className="bg-secondary text-primary hover:bg-secondary/90">
          Add Payment Method
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Purchases;
