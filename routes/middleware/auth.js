const isAuthenticated = (req, res, next) => {
    return req.isAuthenticated() ? next() : res.status(401).redirect('/');
};

const userNotMemberNotAdmin = (req, res, next) => {
    return req.isAuthenticated() && !req.user.is_member && !req.user.is_admin
        ? next()
        : res.status(401).redirect('/');
};

const isMemberNotAdmin = (req, res, next) => {
    return req.isAuthenticated() && req.user.is_member && !req.user.is_admin
        ? next()
        : res.status(401).redirect('/');
};

const isAdmin = (req, res, next) => {
    return req.isAuthenticated && req.user.is_admin
        ? next()
        : res.status(401).redirect('/');
};

export { isAuthenticated, userNotMemberNotAdmin, isMemberNotAdmin, isAdmin };
