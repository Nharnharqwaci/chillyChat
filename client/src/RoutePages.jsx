import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuickSms from './pages/QuickSms';
import Overview from './pages/Overview';
import Support from './pages/support';
import SmsHistory from './pages/SmsHistory';
import SmsHistoryView from './pages/SmsHistoryView';
import Bulksms from './pages/Bulksms';
import Signup from './pages/Signup';

const RoutePages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Overview />} />

                <Route path="/quicksms" element={<QuickSms />} />
                <Route path="/support" element={<Support />} />
                <Route path = "/SmsHistory" element={<SmsHistory/>}/>
                <Route path = "/SmsHistoryView" element={<SmsHistoryView />}/>
                <Route path = "/Bulksms" element={<Bulksms />}/>
                <Route path = "/Signup" element={<Signup />}/>

            </Routes>
        </BrowserRouter>
    );
}

export default RoutePages;

