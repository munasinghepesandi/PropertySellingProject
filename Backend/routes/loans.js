import express from 'express';

const router = express.Router();

const loanProducts = [
  {
    id: 1,
    bank: 'Commercial Bank of Ceylon',
    product: 'Home Ownership Scheme',
    interestRate: 7.5,
    loanAmountValue: 50000000,
    loanAmountLabel: 'Up to Rs. 50M',
    tenureMin: 15,
    tenureMax: 25,
    tenureLabel: '15-25 years',
    monthlyPaymentValue: 45000,
    monthlyPaymentLabel: 'From Rs. 45,000',
    features: ['Flexible tenure', 'No hidden charges', 'Quick approval'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop',
    badge: 'Popular',
  },
  {
    id: 2,
    bank: 'Bank of Ceylon',
    product: 'Sampath Home Loan',
    interestRate: 7.2,
    loanAmountValue: 75000000,
    loanAmountLabel: 'Up to Rs. 75M',
    tenureMin: 15,
    tenureMax: 30,
    tenureLabel: '15-30 years',
    monthlyPaymentValue: 42000,
    monthlyPaymentLabel: 'From Rs. 42,000',
    features: ['Best rates', 'Fast processing', 'Cashback offers'],
    image: 'https://images.unsplash.com/photo-1560264357-8d9766d54a3a?w=1200&q=80&auto=format&fit=crop',
    badge: 'Best Rate',
  },
  {
    id: 3,
    bank: 'Seylan Bank',
    product: 'Dream Home Loan',
    interestRate: 7.8,
    loanAmountValue: 40000000,
    loanAmountLabel: 'Up to Rs. 40M',
    tenureMin: 10,
    tenureMax: 20,
    tenureLabel: '10-20 years',
    monthlyPaymentValue: 50000,
    monthlyPaymentLabel: 'From Rs. 50,000',
    features: ['Instant approval', 'Online application', 'No collateral'],
    image: 'https://images.unsplash.com/photo-1556080945-f0b922b48e34?w=1200&q=80&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 4,
    bank: 'National Development Bank',
    product: 'Rapid Home Finance',
    interestRate: 7.6,
    loanAmountValue: 60000000,
    loanAmountLabel: 'Up to Rs. 60M',
    tenureMin: 15,
    tenureMax: 25,
    tenureLabel: '15-25 years',
    monthlyPaymentValue: 47000,
    monthlyPaymentLabel: 'From Rs. 47,000',
    features: ['Speedy approval', 'Competitive rates', 'Expert guidance'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
    badge: 'Featured',
  },
  {
    id: 5,
    bank: 'DFCC Bank',
    product: 'Premium Home Loan',
    interestRate: 7.9,
    loanAmountValue: 80000000,
    loanAmountLabel: 'Up to Rs. 80M',
    tenureMin: 10,
    tenureMax: 30,
    tenureLabel: '10-30 years',
    monthlyPaymentValue: 55000,
    monthlyPaymentLabel: 'From Rs. 55,000',
    features: ['Flexible repayment', 'Cashback bonus', '24/7 support'],
    image: 'https://images.unsplash.com/photo-1573921723460-efbc7b4e34e9?w=1200&q=80&auto=format&fit=crop',
    badge: 'Premium',
  },
  {
    id: 6,
    bank: 'Hatton National Bank',
    product: 'Smart Home Loan',
    interestRate: 7.4,
    loanAmountValue: 70000000,
    loanAmountLabel: 'Up to Rs. 70M',
    tenureMin: 15,
    tenureMax: 28,
    tenureLabel: '15-28 years',
    monthlyPaymentValue: 44000,
    monthlyPaymentLabel: 'From Rs. 44,000',
    features: ['Smart rates', 'Quick disbursement', 'Top-up facility'],
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=1200&q=80&auto=format&fit=crop',
    badge: 'Quick',
  },
];

const categoryMap = {
  all: null,
  'best-rates': (loan) => loan.interestRate <= 7.5,
  'high-loan': (loan) => loan.loanAmountValue >= 70000000,
  'quick': (loan) => loan.features.some((feature) => /quick|fast|instant/i.test(feature)),
  'low-monthly': (loan) => loan.monthlyPaymentValue <= 45000,
};

const interestMap = {
  any: null,
  'below-7-5': (loan) => loan.interestRate < 7.5,
  '7-5-8': (loan) => loan.interestRate >= 7.5 && loan.interestRate <= 8,
  'above-8': (loan) => loan.interestRate > 8,
};

const loanAmountMap = {
  any: null,
  'up-to-25m': (loan) => loan.loanAmountValue <= 25000000,
  '25m-50m': (loan) => loan.loanAmountValue > 25000000 && loan.loanAmountValue <= 50000000,
  '50m-75m': (loan) => loan.loanAmountValue > 50000000 && loan.loanAmountValue <= 75000000,
  'above-75m': (loan) => loan.loanAmountValue > 75000000,
};

const tenureMap = {
  any: null,
  '10-15-years': (loan) => loan.tenureMin <= 15 && loan.tenureMax >= 10,
  '15-20-years': (loan) => loan.tenureMin <= 20 && loan.tenureMax >= 15,
  '20-plus-years': (loan) => loan.tenureMax >= 20,
};

const featureMap = {
  any: null,
  'quick-approval': 'quick approval',
  cashback: 'cashback',
  'top-up': 'top-up',
  flexible: 'flexible',
};

function formatDisplayCurrency(value) {
  return `Rs. ${new Intl.NumberFormat('en-LK').format(value)}`;
}

function toLoanCard(loan) {
  return {
    id: loan.id,
    bank: loan.bank,
    product: loan.product,
    interestRate: `${loan.interestRate.toFixed(1)}%`,
    interestRateValue: loan.interestRate,
    loanAmount: loan.loanAmountLabel,
    loanAmountValue: loan.loanAmountValue,
    tenure: loan.tenureLabel,
    tenureMin: loan.tenureMin,
    tenureMax: loan.tenureMax,
    monthlyPayment: loan.monthlyPaymentLabel,
    monthlyPaymentValue: loan.monthlyPaymentValue,
    features: loan.features,
    image: loan.image,
    badge: loan.badge,
    emiExample: formatDisplayCurrency(Math.round(loan.monthlyPaymentValue)),
  };
}

router.get('/products', (req, res) => {
  try {
    const {
      category = 'all',
      interestRate = 'any',
      loanAmount = 'any',
      tenure = 'any',
      feature = 'any',
      bank = '',
      search = '',
      limit = '50',
    } = req.query;

    const normalizedCategory = String(category).trim().toLowerCase();
    const normalizedInterest = String(interestRate).trim().toLowerCase();
    const normalizedLoanAmount = String(loanAmount).trim().toLowerCase();
    const normalizedTenure = String(tenure).trim().toLowerCase();
    const normalizedFeature = String(feature).trim().toLowerCase();
    const normalizedBank = String(bank).trim().toLowerCase();
    const normalizedSearch = String(search).trim().toLowerCase();

    const categoryFilter = categoryMap[normalizedCategory] || null;
    const interestFilter = interestMap[normalizedInterest] || null;
    const loanAmountFilter = loanAmountMap[normalizedLoanAmount] || null;
    const tenureFilter = tenureMap[normalizedTenure] || null;
    const featureFilter = featureMap[normalizedFeature] || null;
    const maxLimit = Number.isNaN(Number(limit)) ? 50 : Math.min(Number(limit), 100);

    const filteredLoans = loanProducts.filter((loan) => {
      if (categoryFilter && !categoryFilter(loan)) return false;
      if (interestFilter && !interestFilter(loan)) return false;
      if (loanAmountFilter && !loanAmountFilter(loan)) return false;
      if (tenureFilter && !tenureFilter(loan)) return false;
      if (featureFilter && !loan.features.some((item) => item.toLowerCase().includes(featureFilter))) return false;
      if (normalizedBank && !loan.bank.toLowerCase().includes(normalizedBank)) return false;
      if (
        normalizedSearch &&
        ![
          loan.bank,
          loan.product,
          loan.badge,
          ...loan.features,
        ].some((value) => value.toLowerCase().includes(normalizedSearch))
      ) {
        return false;
      }

      return true;
    });

    res.json({
      success: true,
      data: filteredLoans.slice(0, maxLimit).map(toLoanCard),
      meta: {
        count: filteredLoans.length,
        returned: Math.min(filteredLoans.length, maxLimit),
        category: normalizedCategory,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/products/:id', (req, res) => {
  const loan = loanProducts.find((item) => String(item.id) === String(req.params.id));

  if (!loan) {
    return res.status(404).json({ success: false, message: 'Loan product not found' });
  }

  return res.json({ success: true, data: toLoanCard(loan) });
});

export default router;
