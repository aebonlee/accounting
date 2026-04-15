import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdminGuard from '../components/AdminGuard';
import type { ReactElement } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// Learning path pages
const Basics = lazy(() => import('../pages/basics/Basics'));
const FinancialStatements = lazy(() => import('../pages/financial-statements/FinancialStatements'));
const Bookkeeping = lazy(() => import('../pages/bookkeeping/Bookkeeping'));
const CostAccounting = lazy(() => import('../pages/cost-accounting/CostAccounting'));
const Tax = lazy(() => import('../pages/tax/Tax'));
const ManagementAccounting = lazy(() => import('../pages/management-accounting/ManagementAccounting'));
const Auditing = lazy(() => import('../pages/auditing/Auditing'));
const FinancialAnalysis = lazy(() => import('../pages/financial-analysis/FinancialAnalysis'));

const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback(): ReactElement {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout(): ReactElement {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<MyPage />} />

            {/* Learning Paths */}
            <Route path="/basics" element={<Basics />} />
            <Route path="/financial-statements" element={<FinancialStatements />} />
            <Route path="/bookkeeping" element={<Bookkeeping />} />
            <Route path="/cost-accounting" element={<CostAccounting />} />
            <Route path="/tax" element={<Tax />} />
            <Route path="/management-accounting" element={<ManagementAccounting />} />
            <Route path="/auditing" element={<Auditing />} />
            <Route path="/financial-analysis" element={<FinancialAnalysis />} />

            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
