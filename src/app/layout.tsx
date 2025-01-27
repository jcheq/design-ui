import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import Box from '@mui/material/Box';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="min-h-screen bg-neutral-400 text-white">
          <div className="application-border">        
            <div className="left-info">
              <Sidebar />
              <div className="storage">
                  <div className="flex">
                    Storage
                  <div className="up">Upgrade</div>
                </div>
                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={92} className="progressBar p-1"/>
                </Box>
                <p className="storageDesc">9.2GB of 10GB used</p>
                
              </div>
            </div>
            <div className="right-info">
              <div className="information">
                {children}
              </div>
                
            </div>
          </div>
        </div>
        
      </body>
    </html>
  );
}
