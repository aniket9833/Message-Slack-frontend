## Slack API Integration

### Overview
Developed an end-to-end Slack API integration for workspace creation.

### Features
- **Authentication & User Management**: Implemented secure authentication, allowing members to join workspaces.
- **Real-time Chat**: Integrated WebSockets for seamless communication.
- **File Sharing**: Enabled file uploads within channels and direct messages using AWS S3 with presigned URLs.
- **Channel Management**: Designed features to create and manage channels.

### Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO
- **UI Components**: shadcn
- **Cloud Storage**: AWS S3

### Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/aniket9833/Message-Slack-frontend
   ```
2. Install dependencies:
   ```sh
   cd Message-Slack-frontend
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the backend directory and add necessary credentials (DB connection, API keys, etc.).
4. Start the development server:
   ```sh
   cd Message-Slack-backend
   npm start
   ```
   ```sh
   cd Message-Slack-frontend
   npm run dev
   ```


   ## Screenshots
   ![Screenshot (161)](https://github.com/user-attachments/assets/30f1a13e-d75c-43d7-90bb-d46b92a449f1)
   ![Screenshot (165)](https://github.com/user-attachments/assets/8623c791-f4a9-4884-bc58-2775e5a1a8f8)

  ![Screenshot (163)](https://github.com/user-attachments/assets/ae2d37a8-8129-43d7-9c77-b8d261462516)
  ![Screenshot (164)](https://github.com/user-attachments/assets/385953e4-4c6c-4c54-8ecb-2bac7c250b60)
![Screenshot (160)](https://github.com/user-attachments/assets/89968c19-2689-4a5e-992f-bb48ab1c9b81)

![Screenshot (162)](https://github.com/user-attachments/assets/6ec242b0-b326-4ea5-aa74-dc09f3521b5b)
