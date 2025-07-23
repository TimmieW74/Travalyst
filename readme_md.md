# EU Regulatory Monitor - Travalyst

A comprehensive web application for tracking EU legislation that affects sustainable travel and tourism. This tool helps organizations monitor regulatory developments, assess business impact, and stay informed about policy changes.

## Features

- **Legislation Tracking**: Monitor EU regulations, directives, and communications
- **Advanced Filtering**: Search and filter by category, status, and priority
- **Detailed Views**: In-depth information including timelines and impact assessments
- **Notifications**: Subscribe to email updates for specific legislation
- **Export Options**: Export data to Excel and Word formats
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## File Structure

```
├── index.html          # Main HTML file
├── app.js             # JavaScript functionality
└── README.md          # This file
```

## Local Development

1. Clone this repository
2. Open `index.html` in your web browser
3. The application will run locally with full functionality

## Deployment to Vercel via GitHub

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `eu-regulatory-monitor` or `travalyst-monitor`
3. Keep it public (or private if you prefer)
4. Don't initialize with README since we have our own files

### Step 2: Upload Files

You can either:

**Option A: Use GitHub Web Interface**
1. Click "uploading an existing file" on your new repo page
2. Drag and drop all three files (`index.html`, `app.js`, `README.md`)
3. Add a commit message like "Initial commit: EU Regulatory Monitor"
4. Click "Commit changes"

**Option B: Use Git Commands (if you have Git installed)**
```bash
git clone [your-repo-url]
cd [your-repo-name]
# Copy the three files into this directory
git add .
git commit -m "Initial commit: EU Regulatory Monitor"
git push origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Select your GitHub repository from the list
4. Vercel will automatically detect it's a static HTML site
5. Click "Deploy"
6. Wait for deployment to complete (usually takes 1-2 minutes)
7. Your site will be live at a URL like `https://your-repo-name.vercel.app`

### Step 4: Custom Domain (Optional)

If you want to use a custom domain:
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update your DNS settings

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript**: ES6+ features for interactivity
- **Local Storage**: For persisting user subscriptions
- **Google Fonts**: Inter font family for typography

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## License

This project is created for Travalyst. All rights reserved.

## Support

For questions about deployment or functionality, please refer to the documentation or create an issue in this repository.