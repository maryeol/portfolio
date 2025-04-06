import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "dc": {},
  "view_project": {
    "Upload8": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  },
  "view_page": {
    "Upload4": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  },
  "sg": {}
}});

export default useIoStore;
