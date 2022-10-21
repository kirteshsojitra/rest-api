import GetRequest from "./GetRequest";
import GetRequestHooks from "./GetRequestHooks";
import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandling from "./GetRequestErrorHandling";
import GetRequestSetHeaders from "./GetRequestSetHeaders";
import PostRequest from "./PostRequest";
import PostRequestHooks from "./PostRequestHooks";
import PostRequestAsyncAwait from "./PostRequestAsyncAwait";
import PostRequestErrorHandling from "./PostRequestErrorHandling";
import PostRequestSetHeaders from "./PostRequestSetHeaders";
import PutRequest from "./PutRequest";
import PutRequestHooks from "./PutRequestHooks";
import PutRequestAsyncAwait from "./PutRequestAsyncAwait";
import PutRequestErrorHandling from "./PutRequestErrorHandling";
import PutRequestSetHeaders from "./PutRequestSetHeaders";
import DeleteRequest from "./DeleteRequest";
import DeleteRequestHooks from "./DeleteRequestHooks";
import DeleteRequestAsyncAwait from "./DeleteRequestAsyncAwait";
import DeleteRequestErrorHandling from "./DeleteRequestErrorHandling";
import DeleteRequestSetHeaders from "./DeleteRequestSetHeaders";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GetRequest />
      <GetRequestHooks />
      <GetRequestAsyncAwait />
      <GetRequestErrorHandling />
      <GetRequestSetHeaders />
      <PostRequest />
      <PostRequestHooks />
      <PostRequestAsyncAwait />
      <PostRequestErrorHandling />
      <PostRequestSetHeaders />
      <PutRequest />
      <PutRequestHooks />
      <PutRequestAsyncAwait />
      <PutRequestErrorHandling />
      <PutRequestSetHeaders />
      <DeleteRequest />
      <DeleteRequestHooks />
      <DeleteRequestAsyncAwait />
      <DeleteRequestErrorHandling />
      <DeleteRequestSetHeaders />
    </div>
  );
}

export default App;
