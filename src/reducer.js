const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SOCKET':
      return { ...state, socket: action.pyload };
    case 'UPDATE_PEER':
      return { ...state, peer: action.pyload };
    case 'UPDATE_STREAM':
      return { ...state, stream: action.pyload };
    case 'UPDATE_ALERT':
      return { ...state, stream: action.pyload };
    case 'UPDATE_PEERS':
      const newPeers = { ...state.peers };
      newPeers[action.pyload.peerId] = action.pyload.call;
      return { ...state, peers: newPeers };
    default:
      return state;
  }
};

export default reducer;
