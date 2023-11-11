# Examples

Here are some examples of how you can use `kick.com-api`:


### Basic Integration and Error Handling

```javascript
const { KickApiWrapper } = require('kick.com-api');

async function fetchChannelInfo(channelName) {
  const kickApi = new KickApiWrapper();
  try {
    const channelData = await kickApi.fetchChannelData(channelName);
    console.log(channelData);
  } catch (error) {
    if (error.name === 'NetworkError') {
      console.error('Check your network connection.');
    } else if (error.response) {
      console.error(`API Error: ${error.response.status} - ${error.response.statusText}`);
    } else {
      console.error('Error:', error.message);
    }
  }
}

fetchChannelInfo('exampleChannel');
```

### Fetching Leaderboards

```javascript

const { KickApiWrapper } = require('kick.com-api');

async function fetchLeaderboards(channelName) {
  const kickApi = new KickApiWrapper();
  try {
    const leaderboards = await kickApi.fetchLeaderboards(channelName);
    console.log(leaderboards);
  } catch (error) {
    console.error('Error fetching leaderboards:', error);
  }
}

fetchLeaderboards('exampleChannel');
```

### Fetching Live Stream Details

```javascript
const { KickApiWrapper } = require('kick.com-api');

async function fetchLiveStreamDetails(channelName) {
  const kickApi = new KickApiWrapper();
  try {
    const liveStreamDetails = await kickApi.fetchLiveStreamDetails(channelName);
    console.log(liveStreamDetails);
  } catch (error) {
    console.error('Error fetching live stream details:', error);
  }
}

fetchLiveStreamDetails('exampleChannel');
```

### Fetching Chatroom Settings

```javascript
const { KickApiWrapper } = require('kick.com-api');

async function fetchChatroomSettings(channelName) {
  const kickApi = new KickApiWrapper();
  try {
    const chatroomSettings = await kickApi.fetchChatroomSettings(channelName);
    console.log(chatroomSettings);
  } catch (error) {
    console.error('Error fetching chatroom settings:', error);
  }
}

fetchChatroomSettings('exampleChannel');
```

### Fetching Categories

```javascript
const { KickApiWrapper } = require('kick.com-api');

async function fetchCategories() {
  const kickApi = new KickApiWrapper();
  try {
    const categories = await kickApi.fetchCategories();
    console.log(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

fetchCategories();
```

### Fetching Subcategories

```javascript
const { KickApiWrapper } = require('kick.com-api');

async function fetchSubcategories() {
  const kickApi = new KickApiWrapper();
  try {
    const subcategories = await kickApi.fetchSubcategories();
    console.log(subcategories);
  } catch (error) {
    console.error('Error fetching subcategories:', error);
  }
}

fetchSubcategories();
```

### Fetching Top Categories

```javascript
const { KickApiWrapper } = require('kick.com-api');

async function fetchTopCategories() {
  const kickApi = new KickApiWrapper();
  try {
    const topCategories = await kickApi.fetchTopCategories();
    console.log(topCategories);
  } catch (error) {
    console.error('Error fetching top categories:', error);
  }
}

fetchTopCategories();
```

### Fetching Featured Livestreams

```javascript
const { KickApiWrapper } = require('kick.com-api');

async function fetchFeaturedLivestreams(region) {
  const kickApi = new KickApiWrapper();
  try {
    const featuredLivestreams = await kickApi.fetchFeaturedLivestreams(region);
    console.log(featuredLivestreams);
  } catch (error) {
    console.error('Error fetching featured livestreams:', error);
  }
}

fetchFeaturedLivestreams('en');
```

### Scheduling (Cron Jobs)

```javascript
const cron = require('node-cron');
const { KickApiWrapper } = require('kick.com-api');

cron.schedule('* * * * *', async () => {
  const kickApi = new KickApiWrapper();
  try {
    const data = await kickApi.fetchChannelData('liveChannel');
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error on scheduled fetch:', error);
  }
});
```

### Express.js Route

```javascript
const express = require('express');
const { KickApiWrapper } = require('kick.com-api');
const app = express();
const port = 3000;

app.get('/channel/:name', async (req, res) => {
  const kickApi = new KickApiWrapper();
  try {
    const channelData = await kickApi.fetchChannelData(req.params.name);
    res.json(channelData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
```

### Next.js API Route - Pages Router

```javascript
import { KickApiWrapper } from 'kick.com-api';

export default async function handler(req, res) {
  const kickApi = new KickApiWrapper('v1'); // Initialize with API version v1
  const channelName = req.query.channelName;

  try {
    const data = await kickApi.fetchChannelData(channelName);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

### Next.js API Route - App Router

```javascript
import { KickApiWrapper } from 'kick.com-api';

export async function GET(request) {
  const kickApi = new KickApiWrapper(); // Defaults to API version v2
  const url = new URL(request.url);
  const channelName = url.searchParams.get('channelName');

  try {
    const data = await kickApi.fetchChannelData(channelName);
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

### React Component (JavaScript)

```javascript
import React, { useState, useEffect } from 'react';
import { KickApiWrapper } from 'kick.com-api';

function ChannelInfo({ channelName }) {
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    const kickApi = new KickApiWrapper();
    kickApi.fetchChannelData(channelName)
      .then(data => setChannelData(data))
      .catch(error => console.error(error));
  }, [channelName]);

  return (
    <div>
      {channelData ? <pre>{JSON.stringify(channelData, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}
```

### React Component (TypeScript)

```typescript
import { KickApiWrapper } from 'kick.com-api';

async function fetchChannelInfo(channelName: string): Promise<any> {
  const kickApi = new KickApiWrapper('v2');
  try {
    const channelData: any = await kickApi.fetchChannelData(channelName);
    console.log(channelData);
  } catch (error: any) {
    console.error('Error fetching channel data:', error.message);
  }
}

fetchChannelInfo('exampleChannel');
```