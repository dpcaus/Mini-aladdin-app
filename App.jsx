// Mini-Aladdin Financial Analysis SPA (React + TailwindCSS + Recharts) // Only dpcaus@gmail.com can log in
import { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: 'Mon', value: 100 },
  { time: 'Tue', value: 115 },
  { time: 'Wed', value: 105 },
  { time: 'Thu', value: 130 },
  { time: 'Fri', value: 125 },
];

const isAuthorized = (email) => email === 'dpcaus@gmail.com';

export default function App() {
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (isAuthorized(email)) {
      setLoggedIn(true);
    } else {
      alert('Access denied: Unauthorized email');
    }
  };

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl mb-4 font-bold">Mini-Aladdin Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 rounded text-black"
        />
        <Button className="mt-4" onClick={handleLogin}>Login</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Mini-Aladdin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Market Trend</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={mockData}>
                <XAxis dataKey="time" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Buy/Sell Suggestion</h2>
            <p className="text-green-400 font-bold">📈 BUY Recommendation Triggered</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
