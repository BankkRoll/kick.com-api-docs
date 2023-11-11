# Examples

Here are some examples of how you can use `kick-fetch`:

### 1. **Fetch Channel Data (Default)**
   ```shell
   kick-fetch channel adinross
   ```
### 2. **Fetch Channel Data (API v1)**
   ```shell
   kick-fetch channel adinross -v1
   ```
### 3. **Fetch Leaderboards**
   ```shell
   kick-fetch leaderboards adinross
   ```
### 4. **Fetch Live Stream Details**
   ```shell
   kick-fetch livestream adinross
   ```
### 5. **Fetch Chatroom Settings**
   ```shell
   kick-fetch chatroom adinross
   ```
### 6. **Fetch Categories**
   ```shell
   kick-fetch categories
   ```
### 7. **Fetch Subcategories**
   ```shell
   kick-fetch subcategories
   ```
### 8. **Fetch Top Categories**
   ```shell
   kick-fetch topcategories
   ```
### 9. **Fetch Featured Livestreams (Region Specific)**
   ```shell
   kick-fetch featured en
   ```
### 10. **Fetch Channel Data with Specific Fields**
    ```shell
    kick-fetch channel adinross id followers_count
    ```
### 11. **Fetch Channel Data and Save to File**
    ```shell
    kick-fetch channel adinross -f channel_data.json
    ```
### 12. **Fetch Channel Data in Text Format**
    ```shell
    kick-fetch channel adinross -o text
    ```
### 13. **Pretty Print JSON Output**
    ```shell
    kick-fetch channel adinross -o json -p
    ```
### 14. **Use Configuration File**
    ```shell
    kick-fetch channel adinross -c config.json
    ```
### 15. **Fetch Channel Data Using API v1 and Pretty Print**
    ```shell
    kick-fetch channel adinross -v1 -p
    ```
### 16. **Fetch Leaderboards and Save to File**
    ```shell
    kick-fetch leaderboards adinross -f leaderboards.json
    ```
### 17. **Fetch Live Stream Details with Pretty Print**
    ```shell
    kick-fetch livestream adinross -p
    ```
### 18. **Fetch Chatroom Settings in Text Format**
    ```shell
    kick-fetch chatroom adinross -o text
    ```
### 19. **Fetch Categories and Save Output**
    ```shell
    kick-fetch categories -f categories.json
    ```
### 20. **Fetch Featured Livestreams in Specific Region and Format**
    ```shell
    kick-fetch featured es -o json
    ```


Explore these options to fully leverage the `kick-fetch` CLI tool in your data retrieval workflows.
