const nextId = { current: 4 };

function onCreate() {
  nextId.current += 1;
}

onCreate();
