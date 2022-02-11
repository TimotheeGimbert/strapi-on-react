module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3aed3ff500dec90fdcc643e67a8b12f5'),
  },
});
