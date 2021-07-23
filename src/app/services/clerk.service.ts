import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClerkService {


  loadClerkJS() {
    const script = document.createElement('script');
    const frontendApi = 'clerk.z5t2x.3bv02.lcl.dev';
    script.setAttribute('data-clerk-frontend-api', frontendApi);
    script.src = `https://${frontendApi}/npm/@clerk/clerk-js@1/dist/clerk.browser.js`;
    script.onload = () => {
      console.log('script loaded');
      console.log((window as any).Clerk)
    };
    document.body.appendChild(script);
  }
}
