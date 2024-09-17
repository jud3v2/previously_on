"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'betaseries/3.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Returns a badge details.
     *
     * @summary Returns badge details
     */
    SDK.prototype.getBadgesBadge = function (metadata) {
        return this.core.fetch('/badges/badge', 'get', metadata);
    };
    /**
     * Display collection's data.
     *
     * @summary Display collection's data
     */
    SDK.prototype.getCollectionsCollection = function (metadata) {
        return this.core.fetch('/collections/collection', 'get', metadata);
    };
    /**
     * Deletes a collection from the identified user. [Premium feature]
     *
     * @summary Delete a collection from the identified user [Premium feature]
     */
    SDK.prototype.deleteCollectionsCollection = function (metadata) {
        return this.core.fetch('/collections/collection', 'delete', metadata);
    };
    /**
     * Create/Update a collection for the identified user. [Premium feature]
     *
     * @summary Create/Update a collection for the identified user [Premium feature]
     */
    SDK.prototype.postCollectionsCollection = function (metadata) {
        return this.core.fetch('/collections/collection', 'post', metadata);
    };
    /**
     * Display the list of all collections of the member.
     *
     * @summary Display the list of all collections of the member
     */
    SDK.prototype.getCollectionsList = function (metadata) {
        return this.core.fetch('/collections/list', 'get', metadata);
    };
    /**
     * Retrieves comments for a given element.
     *
     * @summary Get comments
     */
    SDK.prototype.getCommentsComments = function (metadata) {
        return this.core.fetch('/comments/comments', 'get', metadata);
    };
    /**
     * Retrieves a given comment.
     *
     * @summary Retrieve a given comment
     */
    SDK.prototype.getCommentsComment = function (metadata) {
        return this.core.fetch('/comments/comment', 'get', metadata);
    };
    /**
     * Creates or edits a comment for the specified item.
     *
     * @summary Create or edit a comment for the specified item
     */
    SDK.prototype.postCommentsComment = function (metadata) {
        return this.core.fetch('/comments/comment', 'post', metadata);
    };
    /**
     * Deletes a comment from the identified user.
     *
     * @summary Delete a comment from the identified user
     */
    SDK.prototype.deleteCommentsComment = function (metadata) {
        return this.core.fetch('/comments/comment', 'delete', metadata);
    };
    /**
     * Retrieves the replies of a given comment.
     *
     * @summary Retrieve the replies of a given comment
     */
    SDK.prototype.getCommentsReplies = function (metadata) {
        return this.core.fetch('/comments/replies', 'get', metadata);
    };
    /**
     * Creates a comment for an event.
     *
     * @summary Create a comment for an event
     */
    SDK.prototype.postCommentsCommentEvent = function (metadata) {
        return this.core.fetch('/comments/comment_event', 'post', metadata);
    };
    /**
     * Subscribes the member to email notifications for the given item.
     *
     * @summary Subscribe the member to email notifications for the given item
     */
    SDK.prototype.postCommentsSubscription = function (metadata) {
        return this.core.fetch('/comments/subscription', 'post', metadata);
    };
    /**
     * Unsubscribes the member from email notifications for the given item.
     *
     * @summary Unsubscribe the member from email notifications for the given item
     */
    SDK.prototype.deleteCommentsSubscription = function (metadata) {
        return this.core.fetch('/comments/subscription', 'delete', metadata);
    };
    /**
     * Adds a vote for the user for the given comment.
     *
     * @summary Add a vote for the user for the given comment
     */
    SDK.prototype.postCommentsThumb = function (metadata) {
        return this.core.fetch('/comments/thumb', 'post', metadata);
    };
    /**
     * Removes the user's vote for the given comment.
     *
     * @summary Remove the user's vote for the given comment
     */
    SDK.prototype.deleteCommentsThumb = function (metadata) {
        return this.core.fetch('/comments/thumb', 'delete', metadata);
    };
    /**
     * Retrieves the status of comments on the given item (closed or open).
     *
     * @summary Retrieve the status of comments on the given item (closed or open)
     */
    SDK.prototype.getCommentsStatus = function (metadata) {
        return this.core.fetch('/comments/status', 'get', metadata);
    };
    /**
     * Rate an episode with a score from 1 to 5.
     *
     * @summary Rate an episode
     */
    SDK.prototype.postEpisodesNote = function (metadata) {
        return this.core.fetch('/episodes/note', 'post', metadata);
    };
    /**
     * Delete an episode's rating.
     *
     * @summary Remove a rating
     */
    SDK.prototype.deleteEpisodesNote = function (metadata) {
        return this.core.fetch('/episodes/note', 'delete', metadata);
    };
    /**
     * Fetch the list of episodes to watch, with various filters and pagination options.
     *
     * @summary Retrieve the list of episodes to watch.
     */
    SDK.prototype.getEpisodesList = function (metadata) {
        return this.core.fetch('/episodes/list', 'get', metadata);
    };
    /**
     * Indicate an episode has been downloaded.
     *
     * @summary Mark an episode as downloaded
     */
    SDK.prototype.postEpisodesDownloaded = function (metadata) {
        return this.core.fetch('/episodes/downloaded', 'post', metadata);
    };
    /**
     * Unmark an episode as downloaded.
     *
     * @summary Remove the downloaded mark
     */
    SDK.prototype.deleteEpisodesDownloaded = function (metadata) {
        return this.core.fetch('/episodes/downloaded', 'delete', metadata);
    };
    /**
     * Mark one or more episodes as watched, with options to specify multiple episodes, bulk
     * marking, and deletion of future episode marks.
     *
     * @summary Mark an episode as watched
     */
    SDK.prototype.postEpisodesWatched = function (metadata) {
        return this.core.fetch('/episodes/watched', 'post', metadata);
    };
    /**
     * Remove the watched mark from one or more episodes, allowing for multiple episodes to be
     * specified.
     *
     * @summary Unmark an episode as watched
     */
    SDK.prototype.deleteEpisodesWatched = function (metadata) {
        return this.core.fetch('/episodes/watched', 'delete', metadata);
    };
    /**
     * Show details of one or more episodes, allowing for multiple IDs and various information
     * sources.
     *
     * @summary Display information of an episode
     */
    SDK.prototype.getEpisodesDisplay = function (metadata) {
        return this.core.fetch('/episodes/display', 'get', metadata);
    };
    /**
     * Fetch episode details from a given file name.
     *
     * @summary Retrieve episode information
     */
    SDK.prototype.getEpisodesScraper = function (metadata) {
        return this.core.fetch('/episodes/scraper', 'get', metadata);
    };
    /**
     * Fetch episode details based on series ID, URL, episode number, or subtitles.
     *
     * @summary Retrieve episode information
     */
    SDK.prototype.getEpisodesSearch = function (metadata) {
        return this.core.fetch('/episodes/search', 'get', metadata);
    };
    /**
     * Fetch the most recently aired episode of a specific series.
     *
     * @summary Retrieve the latest aired episode
     */
    SDK.prototype.getEpisodesLatest = function (metadata) {
        return this.core.fetch('/episodes/latest', 'get', metadata);
    };
    /**
     * Fetch the upcoming episode of a specific series.
     *
     * @summary Retrieve the next episode
     */
    SDK.prototype.getEpisodesNext = function (metadata) {
        return this.core.fetch('/episodes/next', 'get', metadata);
    };
    /**
     * Indicate an episode or multiple episodes as not to be watched.
     *
     * @summary Mark an episode as not to watch
     */
    SDK.prototype.postEpisodesHidden = function (metadata) {
        return this.core.fetch('/episodes/hidden', 'post', metadata);
    };
    /**
     * Unmark an episode or multiple episodes from being hidden.
     *
     * @summary Remove an episode from the hidden list
     */
    SDK.prototype.deleteEpisodesHidden = function (metadata) {
        return this.core.fetch('/episodes/hidden', 'delete', metadata);
    };
    /**
     * Fetch the list of episodes that have been watched but not yet rated.
     *
     * @summary Retrieve the list of watched and unrated episodes
     */
    SDK.prototype.getEpisodesUnrated = function (metadata) {
        return this.core.fetch('/episodes/unrated', 'get', metadata);
    };
    /**
     * Retrieves the list of friends of the member.
     *
     * @summary Retrieves friends List
     */
    SDK.prototype.getFriendsList = function (metadata) {
        return this.core.fetch('/friends/list', 'get', metadata);
    };
    /**
     * Retrieves the list of requests sent by the user.
     *
     * @summary Retrieves sent requests
     */
    SDK.prototype.getFriendsRequests = function (metadata) {
        return this.core.fetch('/friends/requests', 'get', metadata);
    };
    /**
     * Adds a friend to the user's account.
     *
     * @summary Adds a friend
     */
    SDK.prototype.postFriendsFriend = function (metadata) {
        return this.core.fetch('/friends/friend', 'post', metadata);
    };
    /**
     * Removes a friend from the user's account.
     *
     * @summary Removes a friend
     */
    SDK.prototype.deleteFriendsFriend = function (metadata) {
        return this.core.fetch('/friends/friend', 'delete', metadata);
    };
    /**
     * Blocks a user.
     *
     * @summary Blocks a user
     */
    SDK.prototype.postFriendsBlock = function (metadata) {
        return this.core.fetch('/friends/block', 'post', metadata);
    };
    /**
     * Unblocks a user.
     *
     * @summary Unblocks a user
     */
    SDK.prototype.deleteFriendsBlock = function (metadata) {
        return this.core.fetch('/friends/block', 'delete', metadata);
    };
    /**
     * Deletes the filter for the connected member for the type of media.
     *
     * @summary Deletes filter
     */
    SDK.prototype.deleteProfileFiltersFilter = function (metadata) {
        return this.core.fetch('/profile-filters/filter', 'delete', metadata);
    };
    /**
     * Retrieves member options (subtitles).
     *
     * @summary Retrieves member options
     */
    SDK.prototype.getMembersOptions = function (metadata) {
        return this.core.fetch('/members/options', 'get', metadata);
    };
    /**
     * Standard member authentication.
     *
     * @summary Standard member authentication
     */
    SDK.prototype.postMembersAuth = function (metadata) {
        return this.core.fetch('/members/auth', 'post', metadata);
    };
    /**
     * OAuth authentication. Redirects the user to the callback URL specified in your account
     * with the GET parameter token.
     *
     * @summary OAuth Authentication
     */
    SDK.prototype.postMembersOauth = function (metadata) {
        return this.core.fetch('/members/oauth', 'post', metadata);
    };
    /**
     * Retrieves an access token with the code provided by OAuth 2 authentication.
     *
     * @summary OAuth2 Access Token
     */
    SDK.prototype.postMembersAccessToken = function (metadata) {
        return this.core.fetch('/members/access_token', 'post', metadata);
    };
    /**
     * Returns information of a member, defaulting to the identified member. Use movies/member
     * to retrieve movies and shows/member for series.
     *
     * @summary Returns member information
     */
    SDK.prototype.getMembersInfos = function (metadata) {
        return this.core.fetch('/members/infos', 'get', metadata);
    };
    /**
     * Returns available username options on BetaSeries.
     *
     * @summary Returns available usernames
     */
    SDK.prototype.getMembersUsername = function (metadata) {
        return this.core.fetch('/members/username', 'get', metadata);
    };
    /**
     * Modifies a user option.
     *
     * @summary Modifies user option
     */
    SDK.prototype.postMembersOption = function (metadata) {
        return this.core.fetch('/members/option', 'post', metadata);
    };
    /**
     * Checks if the token is active.
     *
     * @summary Checks token activity
     */
    SDK.prototype.getMembersIsActive = function (metadata) {
        return this.core.fetch('/members/is_active', 'get', metadata);
    };
    /**
     * Destroys the active token.
     *
     * @summary Destroys active token
     */
    SDK.prototype.postMembersDestroy = function (metadata) {
        return this.core.fetch('/members/destroy', 'post', metadata);
    };
    /**
     * Displays member badges.
     *
     * @summary Displays member badges
     */
    SDK.prototype.getMembersBadges = function (metadata) {
        return this.core.fetch('/members/badges', 'get', metadata);
    };
    /**
     * Displays the latest member notifications. Types: badge, banner, bugs, character,
     * comment, donations, episode, facebook, film, forum, friend, message, quiz, recommend,
     * site, subtitles, video.
     *
     * @summary Displays latest notifications
     */
    SDK.prototype.getMembersNotifications = function (metadata) {
        return this.core.fetch('/members/notifications', 'get', metadata);
    };
    /**
     * Deletes a notification.
     *
     * @summary Deletes a notification
     */
    SDK.prototype.deleteMembersNotification = function (metadata) {
        return this.core.fetch('/members/notification', 'delete', metadata);
    };
    /**
     * Creates a new member account on BetaSeries.
     *
     * @summary Creates new member account
     */
    SDK.prototype.postMembersSignup = function (metadata) {
        return this.core.fetch('/members/signup', 'post', metadata);
    };
    /**
     * Searches for members.
     *
     * @summary Member search
     */
    SDK.prototype.getMembersSearch = function (metadata) {
        return this.core.fetch('/members/search', 'get', metadata);
    };
    /**
     * Searches members among the account's friends.
     *
     * @summary Searches members among friends
     */
    SDK.prototype.postMembersSync = function (metadata) {
        return this.core.fetch('/members/sync', 'post', metadata);
    };
    /**
     * Sends an email to reset the password.
     *
     * @summary Password reset email
     */
    SDK.prototype.postMembersLost = function (metadata) {
        return this.core.fetch('/members/lost', 'post', metadata);
    };
    /**
     * Uploads and replaces the identified user's avatar.
     *
     * @summary Uploads and replaces user avatar
     */
    SDK.prototype.postMembersAvatar = function (metadata) {
        return this.core.fetch('/members/avatar', 'post', metadata);
    };
    /**
     * Deletes the identified user's avatar.
     *
     * @summary Deletes user avatar
     */
    SDK.prototype.deleteMembersAvatar = function (metadata) {
        return this.core.fetch('/members/avatar', 'delete', metadata);
    };
    /**
     * Uploads and replaces the identified user's banner.
     *
     * @summary Uploads user banner
     */
    SDK.prototype.postMembersBanner = function (metadata) {
        return this.core.fetch('/members/banner', 'post', metadata);
    };
    /**
     * Delete the banner of the identified user.
     *
     * @summary Remove the banner
     */
    SDK.prototype.deleteMembersBanner = function (metadata) {
        return this.core.fetch('/members/banner', 'delete', metadata);
    };
    /**
     * Set a new locale for the identified member.
     *
     * @summary Change the locale
     */
    SDK.prototype.postMembersLocale = function (metadata) {
        return this.core.fetch('/members/locale', 'post', metadata);
    };
    /**
     * Fetch the email address of the identified member.
     *
     * @summary Retrieve the email address
     */
    SDK.prototype.getMembersEmail = function (metadata) {
        return this.core.fetch('/members/email', 'get', metadata);
    };
    /**
     * Update the email address of the identified member.
     *
     * @summary Change the email address
     */
    SDK.prototype.postMembersEmail = function (metadata) {
        return this.core.fetch('/members/email', 'post', metadata);
    };
    /**
     * Update the password for the identified member.
     *
     * @summary Change the password
     */
    SDK.prototype.postMembersPassword = function (metadata) {
        return this.core.fetch('/members/password', 'post', metadata);
    };
    /**
     * Returns the year's statistics of a member, defaulting to the identified member.
     *
     * @summary Returns yearly member statistics
     */
    SDK.prototype.getMembersYear = function (metadata) {
        return this.core.fetch('/members/year', 'get', metadata);
    };
    /**
     * Initiates the account deletion process (sends an email with a link for permanent
     * deletion).
     *
     * @summary Initiates account deletion process
     */
    SDK.prototype.postMembersDelete = function (metadata) {
        return this.core.fetch('/members/delete', 'post', metadata);
    };
    /**
     * Fetch the inbox of the identified member, paginated by 20 messages.
     *
     * @summary Retrieve the member's inbox
     */
    SDK.prototype.getMessagesInbox = function (metadata) {
        return this.core.fetch('/messages/inbox', 'get', metadata);
    };
    /**
     * Fetch a discussion using the ID of its first message.
     *
     * @summary Retrieve a discussion
     */
    SDK.prototype.getMessagesDiscussion = function (metadata) {
        return this.core.fetch('/messages/discussion', 'get', metadata);
    };
    /**
     * Mark a specific message as read.
     *
     * @summary Mark a message as read
     */
    SDK.prototype.postMessagesRead = function (metadata) {
        return this.core.fetch('/messages/read', 'post', metadata);
    };
    /**
     * Delete a specific message. If it's the first in a discussion, the entire discussion is
     * deleted.
     *
     * @summary Delete a message
     */
    SDK.prototype.deleteMessagesMessage = function (metadata) {
        return this.core.fetch('/messages/message', 'delete', metadata);
    };
    /**
     * Send a message to a fellow member of the site.
     *
     * @summary Send a message
     */
    SDK.prototype.postMessagesMessage = function (metadata) {
        return this.core.fetch('/messages/message', 'post', metadata);
    };
    /**
     * Display the details of a movie from either its own ID, TheMovieDB ID, or IMDB ID.
     *
     * @summary Show movie details
     */
    SDK.prototype.getMoviesMovie = function (metadata) {
        return this.core.fetch('/movies/movie', 'get', metadata);
    };
    /**
     * Add or update the movie in the member's movie list.
     *
     * @summary Add or update a movie
     */
    SDK.prototype.postMoviesMovie = function (metadata) {
        return this.core.fetch('/movies/movie', 'post', metadata);
    };
    /**
     * Delete a movie from the member's account.
     *
     * @summary Remove a movie
     */
    SDK.prototype.deleteMoviesMovie = function (metadata) {
        return this.core.fetch('/movies/movie', 'delete', metadata);
    };
    /**
     * Show the complete list of movies.
     *
     * @summary Display the list of all movies
     */
    SDK.prototype.getMoviesList = function (metadata) {
        return this.core.fetch('/movies/list', 'get', metadata);
    };
    /**
     * Show the complete list of movies of a member.
     *
     * @summary Display all movies of a member
     */
    SDK.prototype.getMoviesMember = function (metadata) {
        return this.core.fetch('/movies/member', 'get', metadata);
    };
    /**
     * Show a randomly selected movie.
     *
     * @summary Display a random movie
     */
    SDK.prototype.getMoviesRandom = function (metadata) {
        return this.core.fetch('/movies/random', 'get', metadata);
    };
    /**
     * Search for a movie based on various criteria.
     *
     * @summary Search for a movie
     */
    SDK.prototype.getMoviesSearch = function (metadata) {
        return this.core.fetch('/movies/search', 'get', metadata);
    };
    /**
     * Get movie details by processing the given file name.
     *
     * @summary Retrieve movie information
     */
    SDK.prototype.getMoviesScraper = function (metadata) {
        return this.core.fetch('/movies/scraper', 'get', metadata);
    };
    /**
     * Show all available movie genres.
     *
     * @summary Display all available genres
     */
    SDK.prototype.getMoviesGenres = function (metadata) {
        return this.core.fetch('/movies/genres', 'get', metadata);
    };
    /**
     * Give a rating to a movie.
     *
     * @summary Rate a movie
     */
    SDK.prototype.postMoviesNote = function (metadata) {
        return this.core.fetch('/movies/note', 'post', metadata);
    };
    /**
     * Delete a given rating from a movie.
     *
     * @summary Remove a movie rating
     */
    SDK.prototype.deleteMoviesNote = function (metadata) {
        return this.core.fetch('/movies/note', 'delete', metadata);
    };
    /**
     * Show movies marked as similar by BetaSeries members.
     *
     * @summary Retrieve similar movies
     */
    SDK.prototype.getMoviesSimilars = function (metadata) {
        return this.core.fetch('/movies/similars', 'get', metadata);
    };
    /**
     * Show the casting details of the movie.
     *
     * @summary Retrieve the cast of the movie.
     */
    SDK.prototype.getMoviesCharacters = function (metadata) {
        return this.core.fetch('/movies/characters', 'get', metadata);
    };
    /**
     * Show the favorite movies of a member.
     *
     * @summary Retrieve favorite movies
     */
    SDK.prototype.getMoviesFavorites = function (metadata) {
        return this.core.fetch('/movies/favorites', 'get', metadata);
    };
    /**
     * Add a favorite movie to the profile of the identified member.
     *
     * @summary Add a favorite movie
     */
    SDK.prototype.postMoviesFavorite = function (metadata) {
        return this.core.fetch('/movies/favorite', 'post', metadata);
    };
    /**
     * Remove a favorite movie from the profile of the identified member.
     *
     * @summary Remove a favorite movie
     */
    SDK.prototype.deleteMoviesFavorite = function (metadata) {
        return this.core.fetch('/movies/favorite', 'delete', metadata);
    };
    /**
     * Display the list of upcoming movies in theaters.
     *
     * @summary Display upcoming movies
     */
    SDK.prototype.getMoviesUpcoming = function (metadata) {
        return this.core.fetch('/movies/upcoming', 'get', metadata);
    };
    /**
     * Display the list of movies to discover.
     *
     * @summary Display movies to discover
     */
    SDK.prototype.getMoviesDiscover = function (metadata) {
        return this.core.fetch('/movies/discover', 'get', metadata);
    };
    /**
     * Display blog articles that talk about the movie.
     *
     * @summary Display blog articles about the movie
     */
    SDK.prototype.getMoviesArticles = function (metadata) {
        return this.core.fetch('/movies/articles', 'get', metadata);
    };
    /**
     * Display the latest news around series.
     *
     * @summary Display the latest news
     */
    SDK.prototype.getNewsLast = function (metadata) {
        return this.core.fetch('/news/last', 'get', metadata);
    };
    /**
     * Retrieves an access token with the code provided by OAuth 2 authentication.
     *
     * @summary Retrieve an access token with the code provided by OAuth 2 authentication
     */
    SDK.prototype.postOauthAccessToken = function (metadata) {
        return this.core.fetch('/oauth/access_token', 'post', metadata);
    };
    /**
     * Retrieves a code to present to the user for identification on a remote device (e.g.,
     * Television).
     *
     * @summary Retrieve a code to present to the user for identification on a remote device (e.g.,
     * Television)
     */
    SDK.prototype.postOauthDevice = function (metadata) {
        return this.core.fetch('/oauth/device', 'post', metadata);
    };
    /**
     * Display the details of the actor.
     *
     * @summary Display details of the actor
     */
    SDK.prototype.getPersonsPerson = function (metadata) {
        return this.core.fetch('/persons/person', 'get', metadata);
    };
    /**
     * Display news articles that talk about the person.
     *
     * @summary Display news articles
     */
    SDK.prototype.getPersonsArticles = function (metadata) {
        return this.core.fetch('/persons/articles', 'get', metadata);
    };
    /**
     * Returns a picture of the member.
     *
     * @summary Return a picture of the member
     */
    SDK.prototype.getPicturesMembers = function (metadata) {
        return this.core.fetch('/pictures/members', 'get', metadata);
    };
    /**
     * Returns a picture of the episode.
     *
     * @summary Return a picture of the episode
     */
    SDK.prototype.getPicturesEpisodes = function (metadata) {
        return this.core.fetch('/pictures/episodes', 'get', metadata);
    };
    /**
     * Returns a picture of the show.
     *
     * @summary Return a picture of the show
     */
    SDK.prototype.getPicturesShows = function (metadata) {
        return this.core.fetch('/pictures/shows', 'get', metadata);
    };
    /**
     * Returns an image of the badge (32x32).
     *
     * @summary Return an image of the badge (32x32)
     */
    SDK.prototype.getPicturesBadges = function (metadata) {
        return this.core.fetch('/pictures/badges', 'get', metadata);
    };
    /**
     * Returns an image of the character.
     *
     * @summary Return an image of the character
     */
    SDK.prototype.getPicturesCharacters = function (metadata) {
        return this.core.fetch('/pictures/characters', 'get', metadata);
    };
    /**
     * Returns an image of the person.
     *
     * @summary Return an image of the person
     */
    SDK.prototype.getPicturesPersons = function (metadata) {
        return this.core.fetch('/pictures/persons', 'get', metadata);
    };
    /**
     * Returns an image of the movie.
     *
     * @summary Return an image of the movie
     */
    SDK.prototype.getPicturesMovies = function (metadata) {
        return this.core.fetch('/pictures/movies', 'get', metadata);
    };
    /**
     * Returns an image of the season of the show.
     *
     * @summary Return an image of the show's season
     */
    SDK.prototype.getPicturesSeasons = function (metadata) {
        return this.core.fetch('/pictures/seasons', 'get', metadata);
    };
    /**
     * Returns an image of the SVOD or VOD platform.
     *
     * @summary Return an image of the SVOD or VOD platform
     */
    SDK.prototype.getPicturesPlatforms = function (metadata) {
        return this.core.fetch('/pictures/platforms', 'get', metadata);
    };
    /**
     * Display all episodes broadcasted in the last 8 days and up to the next 8 days.
     *
     * @summary Display all episodes broadcasted
     */
    SDK.prototype.getPlanningGeneral = function (metadata) {
        return this.core.fetch('/planning/general', 'get', metadata);
    };
    /**
     * Display the schedule of the identified member or another member.
     *
     * @summary Display the schedule
     */
    SDK.prototype.getPlanningMember = function (metadata) {
        return this.core.fetch('/planning/member', 'get', metadata);
    };
    /**
     * Display only the first episode of the upcoming series to be broadcasted.
     *
     * @summary Display only the first episode of the upcoming series
     */
    SDK.prototype.getPlanningIncoming = function (metadata) {
        return this.core.fetch('/planning/incoming', 'get', metadata);
    };
    /**
     * Display the SVOD and VOD platforms available in the country.
     *
     * @summary Display the SVOD and VOD platforms available in the country
     */
    SDK.prototype.getPlatformsList = function (metadata) {
        return this.core.fetch('/platforms/list', 'get', metadata);
    };
    /**
     * Display the different services a user can have.
     *
     * @summary Display the different services a user can have
     */
    SDK.prototype.getPlatformsServices = function (metadata) {
        return this.core.fetch('/platforms/services', 'get', metadata);
    };
    /**
     * Add the service to the user's subscriptions.
     *
     * @summary Add the service to the user's subscriptions
     */
    SDK.prototype.postPlatformsService = function (metadata) {
        return this.core.fetch('/platforms/service', 'post', metadata);
    };
    /**
     * Remove the service from the user's subscriptions.
     *
     * @summary Remove the service from the user's subscriptions
     */
    SDK.prototype.deletePlatformsService = function (metadata) {
        return this.core.fetch('/platforms/service', 'delete', metadata);
    };
    /**
     * Display the latest active poll on BetaSeries.
     *
     * @summary Display the latest active poll
     */
    SDK.prototype.getPollsLast = function (metadata) {
        return this.core.fetch('/polls/last', 'get', metadata);
    };
    /**
     * Display the details of the poll with the given ID.
     *
     * @summary Display the details of a poll
     */
    SDK.prototype.getPollsPoll = function (metadata) {
        return this.core.fetch('/polls/poll', 'get', metadata);
    };
    /**
     * Display the latest active poll regarding the target.
     *
     * @summary Display the latest active poll
     */
    SDK.prototype.getPollsTarget = function (metadata) {
        return this.core.fetch('/polls/target', 'get', metadata);
    };
    /**
     * Display all polls of BetaSeries.
     *
     * @summary Display all polls
     */
    SDK.prototype.getPollsList = function (metadata) {
        return this.core.fetch('/polls/list', 'get', metadata);
    };
    /**
     * Send a response to a poll.
     *
     * @summary Send a response to a poll
     */
    SDK.prototype.postPollsAnswer = function (metadata) {
        return this.core.fetch('/polls/answer', 'post', metadata);
    };
    /**
     * Create a report for the element.
     *
     * @summary Create a report for the element
     */
    SDK.prototype.postReportsReport = function (metadata) {
        return this.core.fetch('/reports/report', 'post', metadata);
    };
    /**
     * Request an update for the element.
     *
     * @summary Request an update for the element
     */
    SDK.prototype.postReportsUpdate = function (metadata) {
        return this.core.fetch('/reports/update', 'post', metadata);
    };
    /**
     * Return search results for all types of elements.
     *
     * @summary Return search results for all types of elements.
     */
    SDK.prototype.getSearchAll = function (metadata) {
        return this.core.fetch('/search/all', 'get', metadata);
    };
    /**
     * Return series search results with advanced filters.
     *
     * @summary Return series search results with advanced filters.
     */
    SDK.prototype.getSearchShows = function (metadata) {
        return this.core.fetch('/search/shows', 'get', metadata);
    };
    /**
     * Return movie search results with advanced filters.
     *
     * @summary Return movie search results with advanced filters.
     */
    SDK.prototype.getSearchMovies = function (metadata) {
        return this.core.fetch('/search/movies', 'get', metadata);
    };
    /**
     * Mark all episodes of a season as watched. Skips already watched episodes.
     *
     * @summary Mark all episodes of a season as watched
     */
    SDK.prototype.postSeasonsWatched = function (metadata) {
        return this.core.fetch('/seasons/watched', 'post', metadata);
    };
    /**
     * Remove all episodes of a season from watched. Skips episodes not yet watched.
     *
     * @summary Remove all episodes of a season from watched
     */
    SDK.prototype.deleteSeasonsWatched = function (metadata) {
        return this.core.fetch('/seasons/watched', 'delete', metadata);
    };
    /**
     * Mark all episodes of a season as hidden. Skips already watched episodes.
     *
     * @summary Mark all episodes of a season as hidden
     */
    SDK.prototype.postSeasonsHide = function (metadata) {
        return this.core.fetch('/seasons/hide', 'post', metadata);
    };
    /**
     * Remove all episodes of a season from hidden. Skips already watched episodes.
     *
     * @summary Remove all episodes of a season from hidden
     */
    SDK.prototype.deleteSeasonsHide = function (metadata) {
        return this.core.fetch('/seasons/hide', 'delete', metadata);
    };
    /**
     * Rate a season.
     *
     * @summary Rate a season
     */
    SDK.prototype.postSeasonsNote = function (metadata) {
        return this.core.fetch('/seasons/note', 'post', metadata);
    };
    /**
     * Remove a rating from a season.
     *
     * @summary Remove a rating from a season
     */
    SDK.prototype.deleteSeasonsNote = function (metadata) {
        return this.core.fetch('/seasons/note', 'delete', metadata);
    };
    /**
     * Rate a series.
     *
     * @summary Rate a series
     */
    SDK.prototype.postShowsNote = function (metadata) {
        return this.core.fetch('/shows/note', 'post', metadata);
    };
    /**
     * Delete a series rating.
     *
     * @summary Delete a series rating
     */
    SDK.prototype.deleteShowsNote = function (metadata) {
        return this.core.fetch('/shows/note', 'delete', metadata);
    };
    /**
     * Search for a series, with member information if a token is provided.
     *
     * @summary Search for a series, with member information if a token is provided
     */
    SDK.prototype.getShowsSearch = function (metadata) {
        return this.core.fetch('/shows/search', 'get', metadata);
    };
    /**
     * Display information about a series.
     *
     * @summary Display information about a series
     */
    SDK.prototype.getShowsDisplay = function (metadata) {
        return this.core.fetch('/shows/display', 'get', metadata);
    };
    /**
     * Display the list of all series.
     *
     * @summary Display the list of all series
     */
    SDK.prototype.getShowsList = function (metadata) {
        return this.core.fetch('/shows/list', 'get', metadata);
    };
    /**
     * Display a random series.
     *
     * @summary Display a random series
     */
    SDK.prototype.getShowsRandom = function (metadata) {
        return this.core.fetch('/shows/random', 'get', metadata);
    };
    /**
     * Display episodes of a series.
     *
     * @summary Display episodes of a series
     */
    SDK.prototype.getShowsEpisodes = function (metadata) {
        return this.core.fetch('/shows/episodes', 'get', metadata);
    };
    /**
     * Add a series to the member's account.
     *
     * @summary Add a series to the member's account
     */
    SDK.prototype.postShowsShow = function (metadata) {
        return this.core.fetch('/shows/show', 'post', metadata);
    };
    /**
     * Remove a series from the member's account.
     *
     * @summary Remove a series from the member's account
     */
    SDK.prototype.deleteShowsShow = function (metadata) {
        return this.core.fetch('/shows/show', 'delete', metadata);
    };
    /**
     * Archive a series in the member's account.
     *
     * @summary Archive a series in the member's account
     */
    SDK.prototype.postShowsArchive = function (metadata) {
        return this.core.fetch('/shows/archive', 'post', metadata);
    };
    /**
     * Remove a series from the archives of the member's account.
     *
     * @summary Remove a series from the archives of the member's account
     */
    SDK.prototype.deleteShowsArchive = function (metadata) {
        return this.core.fetch('/shows/archive', 'delete', metadata);
    };
    /**
     * Create a series recommendation from a member to a friend.
     *
     * @summary Create a series recommendation from a member to a friend
     */
    SDK.prototype.postShowsRecommendation = function (metadata) {
        return this.core.fetch('/shows/recommendation', 'post', metadata);
    };
    /**
     * Delete a sent or received series recommendation.
     *
     * @summary Delete a sent or received series recommendation
     */
    SDK.prototype.deleteShowsRecommendation = function (metadata) {
        return this.core.fetch('/shows/recommendation', 'delete', metadata);
    };
    /**
     * Change the status of a received series recommendation.
     *
     * @summary Change the status of a received series recommendation
     */
    SDK.prototype.putShowsRecommendation = function (metadata) {
        return this.core.fetch('/shows/recommendation', 'put', metadata);
    };
    /**
     * Retrieve recommendations received by the identified user.
     *
     * @summary Retrieve recommendations received by the identified user
     */
    SDK.prototype.getShowsRecommendations = function (metadata) {
        return this.core.fetch('/shows/recommendations', 'get', metadata);
    };
    /**
     * Retrieve series marked as similar.
     *
     * @summary Retrieve series marked as similar
     */
    SDK.prototype.getShowsSimilars = function (metadata) {
        return this.core.fetch('/shows/similars', 'get', metadata);
    };
    /**
     * Retrieve videos associated with the series.
     *
     * @summary Retrieve videos associated with the series
     */
    SDK.prototype.getShowsVideos = function (metadata) {
        return this.core.fetch('/shows/videos', 'get', metadata);
    };
    /**
     * Retrieve characters of the series
     *
     * @summary Retrieve characters of the series
     */
    SDK.prototype.getShowsCharacters = function (metadata) {
        return this.core.fetch('/shows/characters', 'get', metadata);
    };
    /**
     * Retrieve images of the series
     *
     * @summary Retrieve images of the series
     */
    SDK.prototype.getShowsPictures = function (metadata) {
        return this.core.fetch('/shows/pictures', 'get', metadata);
    };
    /**
     * Retrieve the favorite series of the member.
     *
     * @summary Retrieve the favorite series of the member
     */
    SDK.prototype.getShowsFavorites = function (metadata) {
        return this.core.fetch('/shows/favorites', 'get', metadata);
    };
    /**
     * Add a favorite series to the profile of the identified member.
     *
     * @summary Add a favorite series to the profile of the identified member
     */
    SDK.prototype.postShowsFavorite = function (metadata) {
        return this.core.fetch('/shows/favorite', 'post', metadata);
    };
    /**
     * Remove a favorite series from the profile of the identified member.
     *
     * @summary Remove a favorite series from the profile of the identified member
     */
    SDK.prototype.deleteShowsFavorite = function (metadata) {
        return this.core.fetch('/shows/favorite', 'delete', metadata);
    };
    /**
     * Update tags for the given series of the identified member.
     *
     * @summary Update tags for the given series of the identified member
     */
    SDK.prototype.postShowsTags = function (metadata) {
        return this.core.fetch('/shows/tags', 'post', metadata);
    };
    /**
     * Display the list of all series of the member.
     *
     * @summary Display the list of all series of the member
     */
    SDK.prototype.getShowsMember = function (metadata) {
        return this.core.fetch('/shows/member', 'get', metadata);
    };
    /**
     * Display the list of series to discover.
     *
     * @summary Display the list of series to discover
     */
    SDK.prototype.getShowsDiscover = function (metadata) {
        return this.core.fetch('/shows/discover', 'get', metadata);
    };
    /**
     * Display the list of series to discover on major SVoD platforms.
     *
     * @summary Display the list of series to discover on major SVoD platforms
     */
    SDK.prototype.getShowsDiscoverPlatforms = function (metadata) {
        return this.core.fetch('/shows/discover_platforms', 'get', metadata);
    };
    /**
     * Display the list of available series genres.
     *
     * @summary Display the list of available series genres
     */
    SDK.prototype.getShowsGenres = function (metadata) {
        return this.core.fetch('/shows/genres', 'get', metadata);
    };
    /**
     * Display the seasons of the series.
     *
     * @summary Display the seasons of the series
     */
    SDK.prototype.getShowsSeasons = function (metadata) {
        return this.core.fetch('/shows/seasons', 'get', metadata);
    };
    /**
     * Display blog articles that talk about the series.
     *
     * @summary Display blog articles that talk about the series
     */
    SDK.prototype.getShowsArticles = function (metadata) {
        return this.core.fetch('/shows/articles', 'get', metadata);
    };
    /**
     * Retrieve the list of finished and unrated series.
     *
     * @summary Retrieve the list of finished and unrated series
     */
    SDK.prototype.getShowsUnrated = function (metadata) {
        return this.core.fetch('/shows/unrated', 'get', metadata);
    };
    /**
     * Displays the latest subtitles retrieved by BetaSeries.
     *
     * @summary Display the latest subtitles retrieved by BetaSeries
     */
    SDK.prototype.getSubtitlesLast = function (metadata) {
        return this.core.fetch('/subtitles/last', 'get', metadata);
    };
    /**
     * Displays subtitles for a given show.
     *
     * @summary Display subtitles for a given show
     */
    SDK.prototype.getSubtitlesShow = function (metadata) {
        return this.core.fetch('/subtitles/show', 'get', metadata);
    };
    /**
     * Displays subtitles for a given episode.
     *
     * @summary Display subtitles for a given episode
     */
    SDK.prototype.getSubtitlesEpisode = function (metadata) {
        return this.core.fetch('/subtitles/episode', 'get', metadata);
    };
    /**
     * Displays subtitles for a specific season or all seasons.
     *
     * @summary Display subtitles for a season or all seasons
     */
    SDK.prototype.getSubtitlesSeason = function (metadata) {
        return this.core.fetch('/subtitles/season', 'get', metadata);
    };
    /**
     * Reports subtitles as incorrect to be removed from the list.
     *
     * @summary Reports subtitles as incorrect to be removed from the list.
     */
    SDK.prototype.postSubtitlesReport = function (metadata) {
        return this.core.fetch('/subtitles/report', 'post', metadata);
    };
    /**
     * Displays all the tags created by the connected member.
     *
     * @summary Display all tags created by the connected member
     */
    SDK.prototype.getTagsList = function (metadata) {
        return this.core.fetch('/tags/list', 'get', metadata);
    };
    /**
     * Adds a tag (or several) for the show (or the movie) for the connected member.
     *
     * @summary Add a tag (or several) for the show (or movie) for the connected member
     */
    SDK.prototype.postTagsTag = function (metadata) {
        return this.core.fetch('/tags/tag', 'post', metadata);
    };
    /**
     * Removes a tag for the show (or the movie) for the connected member.
     *
     * @summary Remove a tag for the show (or movie) for the connected member
     */
    SDK.prototype.deleteTagsTag = function (metadata) {
        return this.core.fetch('/tags/tag', 'delete', metadata);
    };
    /**
     * Displays the latest events on the site.
     *
     * @summary Display the latest events on the site
     */
    SDK.prototype.getTimelineHome = function (metadata) {
        return this.core.fetch('/timeline/home', 'get', metadata);
    };
    /**
     * Displays the latest events of the friends of the identified member.
     *
     * @summary Display the latest events of the friends of the identified member
     */
    SDK.prototype.getTimelineFeed = function (metadata) {
        return this.core.fetch('/timeline/feed', 'get', metadata);
    };
    /**
     * Displays the latest events of the friends of the identified member.
     *
     * @summary Display the latest events of the friends of the identified member
     */
    SDK.prototype.getTimelineFriends = function (metadata) {
        return this.core.fetch('/timeline/friends', 'get', metadata);
    };
    /**
     * Displays the latest events of the specified member.
     *
     * @summary Display the latest events of the specified member
     */
    SDK.prototype.getTimelineMember = function (metadata) {
        return this.core.fetch('/timeline/member', 'get', metadata);
    };
    /**
     * Displays a particular event.
     *
     * @summary Display a particular event
     */
    SDK.prototype.getTimelineEvent = function (metadata) {
        return this.core.fetch('/timeline/event', 'get', metadata);
    };
    /**
     * Displays the latest events of the connected member on the specified series.
     *
     * @summary Display the latest events of the connected member about the specified show
     */
    SDK.prototype.getTimelineShow = function (metadata) {
        return this.core.fetch('/timeline/show', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;