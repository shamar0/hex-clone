
'use client';

import StyledComponentsRegistry from "@/lib/registry";

// import { ThemeProvider, CssBaseline } from '@mui/material';
// import theme from '@/theme';
// import StyledComponentsRegistry from '@/lib/registry'; // we’ll create this
// // import Navbar from '@/components/Navbar';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <StyledComponentsRegistry>
//           <ThemeProvider theme={theme}>
//             <CssBaseline />
//             {/* <Navbar /> */}
//             {children}
//           </ThemeProvider>
//         </StyledComponentsRegistry>
//       </body>
//     </html>
//   );
// }
// src/app/layout.js or src/app/layout.tsx

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{backgroundColor: "black"}}>
        <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}

