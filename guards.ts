function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyResponse {
  header = "response header";
  result = "response result";
}

class MyError {
  header = "response header";
  result = "response message";
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.result,
    };
  }
}

// ===============

type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {
  // ...
}

setAlertType("success");
