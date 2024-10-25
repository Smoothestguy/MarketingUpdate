import { Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import ProtectedRoute from './components/ProtectedRoute';
import SplashScreen from './components/SplashScreen';
import Auth from './components/Auth';
import Onboarding from './components/Onboarding';
import Personalization from './components/Personalization';
import Home from './components/Home';
import Learn from './components/Learn';
import Goals from './components/Goals';
import Community from './components/Community';
import MarketingPlan from './components/quick-actions/MarketingPlan';
import CampaignTracker from './components/quick-actions/CampaignTracker';
import CaseStudies from './components/quick-actions/CaseStudies';
import Analytics from './components/quick-actions/Analytics';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import CourseList from './components/learning/CourseList';
import CourseDetail from './components/learning/CourseDetail';
import LessonView from './components/learning/LessonView';
import SocialMediaStrategy from './components/community/SocialMediaStrategy';
import ContentCreationWorkshop from './components/community/ContentCreationWorkshop';
import NewPost from './components/community/NewPost';
import Post from './components/community/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/auth" element={<Auth />} />
      
      <Route path="/onboarding" element={
        <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
      } />
      
      <Route path="/personalization" element={
        <ProtectedRoute>
          <Personalization />
        </ProtectedRoute>
      } />
      
      <Route path="/home" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      
      <Route path="/learn" element={
        <ProtectedRoute>
          <Learn />
        </ProtectedRoute>
      }>
        <Route index element={<CourseList />} />
        <Route path="course/:courseId" element={<CourseDetail />} />
        <Route path="course/:courseId/lesson/:lessonId" element={<LessonView />} />
      </Route>
      
      <Route path="/goals" element={
        <ProtectedRoute>
          <Goals />
        </ProtectedRoute>
      } />
      
      <Route path="/community" element={
        <ProtectedRoute>
          <Community />
        </ProtectedRoute>
      } />

      <Route path="/community/post/:postId" element={
        <ProtectedRoute>
          <Post />
        </ProtectedRoute>
      } />

      <Route path="/community/new" element={
        <ProtectedRoute>
          <NewPost />
        </ProtectedRoute>
      } />

      <Route path="/community/social-media-strategy" element={
        <ProtectedRoute>
          <SocialMediaStrategy />
        </ProtectedRoute>
      } />

      <Route path="/community/content-creation" element={
        <ProtectedRoute>
          <ContentCreationWorkshop />
        </ProtectedRoute>
      } />
      
      <Route path="/marketing-plan" element={
        <ProtectedRoute>
          <MarketingPlan />
        </ProtectedRoute>
      } />
      
      <Route path="/campaign-tracker" element={
        <ProtectedRoute>
          <CampaignTracker />
        </ProtectedRoute>
      } />
      
      <Route path="/case-studies" element={
        <ProtectedRoute>
          <CaseStudies />
        </ProtectedRoute>
      } />
      
      <Route path="/analytics" element={
        <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>
      } />
      
      <Route path="/notifications" element={
        <ProtectedRoute>
          <Notifications />
        </ProtectedRoute>
      } />
      
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />

      {/* Catch all route */}
      <Route path="*" element={<Navigate to={isAuthenticated() ? "/home" : "/auth"} replace />} />
    </Routes>
  );
}

export default App;