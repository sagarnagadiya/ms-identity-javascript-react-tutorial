const passportConfig = {
  credentials: {
    tenantName: "uppercircuit.onmicrosoft.com",
    clientID: "a29877a2-99d6-4a99-9096-e0c8c132a5d5",
  },
  policies: {
    policyName: "B2C_1_signupsignin1",
  },
  metadata: {
    b2cDomain: "uppercircuit.b2clogin.com",
    authority: "login.microsoftonline.com",
    discovery: ".well-known/openid-configuration",
    version: "v2.0",
  },
  settings: {
    isB2C: true,
    validateIssuer: false,
    passReqToCallback: true,
    loggingLevel: "info",
    loggingNoPII: false,
  },
  protectedRoutes: {
    todolist: {
      endpoint: "/api/todolist",
      delegatedPermissions: {
        read: ["myblog.read"],
        write: ["myblog.write"],
      },
    },
  },
};

module.exports = passportConfig;
