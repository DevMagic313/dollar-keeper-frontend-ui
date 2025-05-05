
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Trash2, PlusCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PaymentMethods = () => {
  const { toast } = useToast();
  
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 'pm_1',
      type: 'visa',
      last4: '4242',
      expMonth: '04',
      expYear: '2025',
      isDefault: true
    },
    {
      id: 'pm_2',
      type: 'mastercard',
      last4: '5555',
      expMonth: '08',
      expYear: '2026',
      isDefault: false
    }
  ]);
  
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    cardholderName: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });
  const [processingCard, setProcessingCard] = useState(false);
  
  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingCard(true);
    
    // Simulate API call
    setTimeout(() => {
      setProcessingCard(false);
      setIsAddingCard(false);
      
      // Add mock payment method
      const last4 = newCard.cardNumber.slice(-4);
      setPaymentMethods([
        ...paymentMethods, 
        {
          id: `pm_${Math.random().toString(36).substr(2, 9)}`,
          type: 'visa',
          last4,
          expMonth: newCard.expMonth,
          expYear: newCard.expYear,
          isDefault: false
        }
      ]);
      
      // Reset form
      setNewCard({
        cardNumber: '',
        cardholderName: '',
        expMonth: '',
        expYear: '',
        cvc: ''
      });
      
      toast({
        title: "Payment method added",
        description: "Your new payment method has been added successfully.",
      });
    }, 1500);
  };
  
  const handleDeleteCard = (id: string) => {
    setPaymentMethods(paymentMethods.filter(pm => pm.id !== id));
    
    toast({
      title: "Payment method removed",
      description: "Your payment method has been removed successfully.",
    });
  };
  
  const handleSetDefault = (id: string) => {
    setPaymentMethods(paymentMethods.map(pm => ({
      ...pm,
      isDefault: pm.id === id
    })));
    
    toast({
      title: "Default payment method updated",
      description: "Your default payment method has been updated.",
    });
  };
  
  const getCardIcon = (type: string) => {
    return <CreditCard className="h-6 w-6 text-secondary" />;
  };
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Payment Methods</h1>
        <p className="text-gray-400">Manage your payment methods for course purchases</p>
      </div>
      
      <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Your Payment Methods</h2>
          <Button 
            onClick={() => setIsAddingCard(true)}
            className="bg-secondary text-primary hover:bg-secondary/90"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Card
          </Button>
        </div>
        
        {paymentMethods.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-gray-700 rounded-lg">
            <CreditCard className="h-12 w-12 text-gray-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">No payment methods</h3>
            <p className="text-gray-400 mb-4">You haven't added any payment methods yet.</p>
            <Button 
              onClick={() => setIsAddingCard(true)}
              className="bg-secondary text-primary hover:bg-secondary/90"
            >
              Add Payment Method
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div 
                key={method.id} 
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  method.isDefault 
                    ? 'border-secondary/30 bg-secondary/5' 
                    : 'border-gray-800 bg-gray-900/50'
                }`}
              >
                <div className="flex items-center">
                  <div className="bg-gray-800 rounded-full p-2 mr-4">
                    {getCardIcon(method.type)}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {method.type === 'visa' ? 'Visa' : 'Mastercard'} ending in {method.last4}
                    </p>
                    <p className="text-sm text-gray-400">Expires {method.expMonth}/{method.expYear}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {method.isDefault ? (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary">
                      Default
                    </span>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleSetDefault(method.id)}
                      className="border-gray-700 text-gray-300 hover:text-secondary"
                    >
                      Set Default
                    </Button>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleDeleteCard(method.id)}
                    className="text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                    disabled={method.isDefault}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-400">
              Your payment information is securely stored and processed. We never store your full card details on our servers.
            </p>
          </div>
        </div>
      </div>
      
      <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Add Payment Method</DialogTitle>
            <DialogDescription className="text-gray-400">
              Add a new credit or debit card to your account.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleAddCard} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="cardholderName">Cardholder Name</Label>
              <Input
                id="cardholderName"
                value={newCard.cardholderName}
                onChange={(e) => setNewCard({...newCard, cardholderName: e.target.value})}
                placeholder="John Doe"
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                value={newCard.cardNumber}
                onChange={(e) => setNewCard({...newCard, cardNumber: e.target.value})}
                placeholder="1234 5678 9012 3456"
                required
                maxLength={19}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expMonth">Exp. Month</Label>
                <Input
                  id="expMonth"
                  value={newCard.expMonth}
                  onChange={(e) => setNewCard({...newCard, expMonth: e.target.value})}
                  placeholder="MM"
                  required
                  maxLength={2}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="expYear">Exp. Year</Label>
                <Input
                  id="expYear"
                  value={newCard.expYear}
                  onChange={(e) => setNewCard({...newCard, expYear: e.target.value})}
                  placeholder="YYYY"
                  required
                  maxLength={4}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  value={newCard.cvc}
                  onChange={(e) => setNewCard({...newCard, cvc: e.target.value})}
                  placeholder="123"
                  required
                  maxLength={4}
                  type="password"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>
            
            <DialogFooter className="mt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsAddingCard(false)}
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-secondary text-primary hover:bg-secondary/90"
                disabled={processingCard}
              >
                {processingCard ? 'Processing...' : 'Add Card'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default PaymentMethods;
