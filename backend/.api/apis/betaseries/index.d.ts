import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Returns a badge details.
     *
     * @summary Returns badge details
     */
    getBadgesBadge(metadata: types.GetBadgesBadgeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display collection's data.
     *
     * @summary Display collection's data
     */
    getCollectionsCollection(metadata: types.GetCollectionsCollectionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a collection from the identified user. [Premium feature]
     *
     * @summary Delete a collection from the identified user [Premium feature]
     */
    deleteCollectionsCollection(metadata: types.DeleteCollectionsCollectionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create/Update a collection for the identified user. [Premium feature]
     *
     * @summary Create/Update a collection for the identified user [Premium feature]
     */
    postCollectionsCollection(metadata?: types.PostCollectionsCollectionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the list of all collections of the member.
     *
     * @summary Display the list of all collections of the member
     */
    getCollectionsList(metadata?: types.GetCollectionsListMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves comments for a given element.
     *
     * @summary Get comments
     */
    getCommentsComments(metadata: types.GetCommentsCommentsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves a given comment.
     *
     * @summary Retrieve a given comment
     */
    getCommentsComment(metadata: types.GetCommentsCommentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates or edits a comment for the specified item.
     *
     * @summary Create or edit a comment for the specified item
     */
    postCommentsComment(metadata: types.PostCommentsCommentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a comment from the identified user.
     *
     * @summary Delete a comment from the identified user
     */
    deleteCommentsComment(metadata: types.DeleteCommentsCommentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves the replies of a given comment.
     *
     * @summary Retrieve the replies of a given comment
     */
    getCommentsReplies(metadata: types.GetCommentsRepliesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates a comment for an event.
     *
     * @summary Create a comment for an event
     */
    postCommentsCommentEvent(metadata?: types.PostCommentsCommentEventMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Subscribes the member to email notifications for the given item.
     *
     * @summary Subscribe the member to email notifications for the given item
     */
    postCommentsSubscription(metadata?: types.PostCommentsSubscriptionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Unsubscribes the member from email notifications for the given item.
     *
     * @summary Unsubscribe the member from email notifications for the given item
     */
    deleteCommentsSubscription(metadata?: types.DeleteCommentsSubscriptionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Adds a vote for the user for the given comment.
     *
     * @summary Add a vote for the user for the given comment
     */
    postCommentsThumb(metadata: types.PostCommentsThumbMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes the user's vote for the given comment.
     *
     * @summary Remove the user's vote for the given comment
     */
    deleteCommentsThumb(metadata: types.DeleteCommentsThumbMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves the status of comments on the given item (closed or open).
     *
     * @summary Retrieve the status of comments on the given item (closed or open)
     */
    getCommentsStatus(metadata?: types.GetCommentsStatusMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Rate an episode with a score from 1 to 5.
     *
     * @summary Rate an episode
     */
    postEpisodesNote(metadata?: types.PostEpisodesNoteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete an episode's rating.
     *
     * @summary Remove a rating
     */
    deleteEpisodesNote(metadata?: types.DeleteEpisodesNoteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch the list of episodes to watch, with various filters and pagination options.
     *
     * @summary Retrieve the list of episodes to watch.
     */
    getEpisodesList(metadata?: types.GetEpisodesListMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Indicate an episode has been downloaded.
     *
     * @summary Mark an episode as downloaded
     */
    postEpisodesDownloaded(metadata?: types.PostEpisodesDownloadedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Unmark an episode as downloaded.
     *
     * @summary Remove the downloaded mark
     */
    deleteEpisodesDownloaded(metadata?: types.DeleteEpisodesDownloadedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Mark one or more episodes as watched, with options to specify multiple episodes, bulk
     * marking, and deletion of future episode marks.
     *
     * @summary Mark an episode as watched
     */
    postEpisodesWatched(metadata?: types.PostEpisodesWatchedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove the watched mark from one or more episodes, allowing for multiple episodes to be
     * specified.
     *
     * @summary Unmark an episode as watched
     */
    deleteEpisodesWatched(metadata?: types.DeleteEpisodesWatchedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show details of one or more episodes, allowing for multiple IDs and various information
     * sources.
     *
     * @summary Display information of an episode
     */
    getEpisodesDisplay(metadata?: types.GetEpisodesDisplayMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch episode details from a given file name.
     *
     * @summary Retrieve episode information
     */
    getEpisodesScraper(metadata?: types.GetEpisodesScraperMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch episode details based on series ID, URL, episode number, or subtitles.
     *
     * @summary Retrieve episode information
     */
    getEpisodesSearch(metadata?: types.GetEpisodesSearchMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch the most recently aired episode of a specific series.
     *
     * @summary Retrieve the latest aired episode
     */
    getEpisodesLatest(metadata?: types.GetEpisodesLatestMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch the upcoming episode of a specific series.
     *
     * @summary Retrieve the next episode
     */
    getEpisodesNext(metadata?: types.GetEpisodesNextMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Indicate an episode or multiple episodes as not to be watched.
     *
     * @summary Mark an episode as not to watch
     */
    postEpisodesHidden(metadata?: types.PostEpisodesHiddenMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Unmark an episode or multiple episodes from being hidden.
     *
     * @summary Remove an episode from the hidden list
     */
    deleteEpisodesHidden(metadata?: types.DeleteEpisodesHiddenMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch the list of episodes that have been watched but not yet rated.
     *
     * @summary Retrieve the list of watched and unrated episodes
     */
    getEpisodesUnrated(metadata?: types.GetEpisodesUnratedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves the list of friends of the member.
     *
     * @summary Retrieves friends List
     */
    getFriendsList(metadata?: types.GetFriendsListMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves the list of requests sent by the user.
     *
     * @summary Retrieves sent requests
     */
    getFriendsRequests(metadata?: types.GetFriendsRequestsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Adds a friend to the user's account.
     *
     * @summary Adds a friend
     */
    postFriendsFriend(metadata?: types.PostFriendsFriendMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes a friend from the user's account.
     *
     * @summary Removes a friend
     */
    deleteFriendsFriend(metadata?: types.DeleteFriendsFriendMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Blocks a user.
     *
     * @summary Blocks a user
     */
    postFriendsBlock(metadata?: types.PostFriendsBlockMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Unblocks a user.
     *
     * @summary Unblocks a user
     */
    deleteFriendsBlock(metadata?: types.DeleteFriendsBlockMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes the filter for the connected member for the type of media.
     *
     * @summary Deletes filter
     */
    deleteProfileFiltersFilter(metadata?: types.DeleteProfileFiltersFilterMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves member options (subtitles).
     *
     * @summary Retrieves member options
     */
    getMembersOptions(metadata?: types.GetMembersOptionsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Standard member authentication.
     *
     * @summary Standard member authentication
     */
    postMembersAuth(metadata?: types.PostMembersAuthMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * OAuth authentication. Redirects the user to the callback URL specified in your account
     * with the GET parameter token.
     *
     * @summary OAuth Authentication
     */
    postMembersOauth(metadata?: types.PostMembersOauthMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves an access token with the code provided by OAuth 2 authentication.
     *
     * @summary OAuth2 Access Token
     */
    postMembersAccessToken(metadata?: types.PostMembersAccessTokenMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns information of a member, defaulting to the identified member. Use movies/member
     * to retrieve movies and shows/member for series.
     *
     * @summary Returns member information
     */
    getMembersInfos(metadata?: types.GetMembersInfosMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns available username options on BetaSeries.
     *
     * @summary Returns available usernames
     */
    getMembersUsername(metadata?: types.GetMembersUsernameMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Modifies a user option.
     *
     * @summary Modifies user option
     */
    postMembersOption(metadata?: types.PostMembersOptionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Checks if the token is active.
     *
     * @summary Checks token activity
     */
    getMembersIsActive(metadata?: types.GetMembersIsActiveMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Destroys the active token.
     *
     * @summary Destroys active token
     */
    postMembersDestroy(metadata?: types.PostMembersDestroyMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays member badges.
     *
     * @summary Displays member badges
     */
    getMembersBadges(metadata?: types.GetMembersBadgesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays the latest member notifications. Types: badge, banner, bugs, character,
     * comment, donations, episode, facebook, film, forum, friend, message, quiz, recommend,
     * site, subtitles, video.
     *
     * @summary Displays latest notifications
     */
    getMembersNotifications(metadata?: types.GetMembersNotificationsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes a notification.
     *
     * @summary Deletes a notification
     */
    deleteMembersNotification(metadata?: types.DeleteMembersNotificationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates a new member account on BetaSeries.
     *
     * @summary Creates new member account
     */
    postMembersSignup(metadata?: types.PostMembersSignupMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Searches for members.
     *
     * @summary Member search
     */
    getMembersSearch(metadata?: types.GetMembersSearchMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Searches members among the account's friends.
     *
     * @summary Searches members among friends
     */
    postMembersSync(metadata?: types.PostMembersSyncMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Sends an email to reset the password.
     *
     * @summary Password reset email
     */
    postMembersLost(metadata?: types.PostMembersLostMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Uploads and replaces the identified user's avatar.
     *
     * @summary Uploads and replaces user avatar
     */
    postMembersAvatar(metadata?: types.PostMembersAvatarMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Deletes the identified user's avatar.
     *
     * @summary Deletes user avatar
     */
    deleteMembersAvatar(metadata?: types.DeleteMembersAvatarMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Uploads and replaces the identified user's banner.
     *
     * @summary Uploads user banner
     */
    postMembersBanner(metadata?: types.PostMembersBannerMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete the banner of the identified user.
     *
     * @summary Remove the banner
     */
    deleteMembersBanner(metadata?: types.DeleteMembersBannerMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Set a new locale for the identified member.
     *
     * @summary Change the locale
     */
    postMembersLocale(metadata?: types.PostMembersLocaleMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch the email address of the identified member.
     *
     * @summary Retrieve the email address
     */
    getMembersEmail(metadata?: types.GetMembersEmailMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update the email address of the identified member.
     *
     * @summary Change the email address
     */
    postMembersEmail(metadata?: types.PostMembersEmailMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update the password for the identified member.
     *
     * @summary Change the password
     */
    postMembersPassword(metadata?: types.PostMembersPasswordMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns the year's statistics of a member, defaulting to the identified member.
     *
     * @summary Returns yearly member statistics
     */
    getMembersYear(metadata?: types.GetMembersYearMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Initiates the account deletion process (sends an email with a link for permanent
     * deletion).
     *
     * @summary Initiates account deletion process
     */
    postMembersDelete(metadata?: types.PostMembersDeleteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch the inbox of the identified member, paginated by 20 messages.
     *
     * @summary Retrieve the member's inbox
     */
    getMessagesInbox(metadata?: types.GetMessagesInboxMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Fetch a discussion using the ID of its first message.
     *
     * @summary Retrieve a discussion
     */
    getMessagesDiscussion(metadata?: types.GetMessagesDiscussionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Mark a specific message as read.
     *
     * @summary Mark a message as read
     */
    postMessagesRead(metadata?: types.PostMessagesReadMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a specific message. If it's the first in a discussion, the entire discussion is
     * deleted.
     *
     * @summary Delete a message
     */
    deleteMessagesMessage(metadata?: types.DeleteMessagesMessageMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Send a message to a fellow member of the site.
     *
     * @summary Send a message
     */
    postMessagesMessage(metadata?: types.PostMessagesMessageMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the details of a movie from either its own ID, TheMovieDB ID, or IMDB ID.
     *
     * @summary Show movie details
     */
    getMoviesMovie(metadata?: types.GetMoviesMovieMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add or update the movie in the member's movie list.
     *
     * @summary Add or update a movie
     */
    postMoviesMovie(metadata?: types.PostMoviesMovieMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a movie from the member's account.
     *
     * @summary Remove a movie
     */
    deleteMoviesMovie(metadata?: types.DeleteMoviesMovieMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show the complete list of movies.
     *
     * @summary Display the list of all movies
     */
    getMoviesList(metadata?: types.GetMoviesListMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show the complete list of movies of a member.
     *
     * @summary Display all movies of a member
     */
    getMoviesMember(metadata?: types.GetMoviesMemberMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show a randomly selected movie.
     *
     * @summary Display a random movie
     */
    getMoviesRandom(metadata?: types.GetMoviesRandomMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Search for a movie based on various criteria.
     *
     * @summary Search for a movie
     */
    getMoviesSearch(metadata?: types.GetMoviesSearchMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get movie details by processing the given file name.
     *
     * @summary Retrieve movie information
     */
    getMoviesScraper(metadata?: types.GetMoviesScraperMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show all available movie genres.
     *
     * @summary Display all available genres
     */
    getMoviesGenres(metadata?: types.GetMoviesGenresMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Give a rating to a movie.
     *
     * @summary Rate a movie
     */
    postMoviesNote(metadata?: types.PostMoviesNoteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a given rating from a movie.
     *
     * @summary Remove a movie rating
     */
    deleteMoviesNote(metadata?: types.DeleteMoviesNoteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show movies marked as similar by BetaSeries members.
     *
     * @summary Retrieve similar movies
     */
    getMoviesSimilars(metadata?: types.GetMoviesSimilarsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show the casting details of the movie.
     *
     * @summary Retrieve the cast of the movie.
     */
    getMoviesCharacters(metadata?: types.GetMoviesCharactersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show the favorite movies of a member.
     *
     * @summary Retrieve favorite movies
     */
    getMoviesFavorites(metadata?: types.GetMoviesFavoritesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add a favorite movie to the profile of the identified member.
     *
     * @summary Add a favorite movie
     */
    postMoviesFavorite(metadata?: types.PostMoviesFavoriteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove a favorite movie from the profile of the identified member.
     *
     * @summary Remove a favorite movie
     */
    deleteMoviesFavorite(metadata?: types.DeleteMoviesFavoriteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the list of upcoming movies in theaters.
     *
     * @summary Display upcoming movies
     */
    getMoviesUpcoming(metadata?: types.GetMoviesUpcomingMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the list of movies to discover.
     *
     * @summary Display movies to discover
     */
    getMoviesDiscover(metadata?: types.GetMoviesDiscoverMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display blog articles that talk about the movie.
     *
     * @summary Display blog articles about the movie
     */
    getMoviesArticles(metadata?: types.GetMoviesArticlesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the latest news around series.
     *
     * @summary Display the latest news
     */
    getNewsLast(metadata?: types.GetNewsLastMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves an access token with the code provided by OAuth 2 authentication.
     *
     * @summary Retrieve an access token with the code provided by OAuth 2 authentication
     */
    postOauthAccessToken(metadata?: types.PostOauthAccessTokenMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves a code to present to the user for identification on a remote device (e.g.,
     * Television).
     *
     * @summary Retrieve a code to present to the user for identification on a remote device (e.g.,
     * Television)
     */
    postOauthDevice(metadata?: types.PostOauthDeviceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the details of the actor.
     *
     * @summary Display details of the actor
     */
    getPersonsPerson(metadata?: types.GetPersonsPersonMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display news articles that talk about the person.
     *
     * @summary Display news articles
     */
    getPersonsArticles(metadata?: types.GetPersonsArticlesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a picture of the member.
     *
     * @summary Return a picture of the member
     */
    getPicturesMembers(metadata: types.GetPicturesMembersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a picture of the episode.
     *
     * @summary Return a picture of the episode
     */
    getPicturesEpisodes(metadata: types.GetPicturesEpisodesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns a picture of the show.
     *
     * @summary Return a picture of the show
     */
    getPicturesShows(metadata: types.GetPicturesShowsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns an image of the badge (32x32).
     *
     * @summary Return an image of the badge (32x32)
     */
    getPicturesBadges(metadata: types.GetPicturesBadgesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns an image of the character.
     *
     * @summary Return an image of the character
     */
    getPicturesCharacters(metadata: types.GetPicturesCharactersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns an image of the person.
     *
     * @summary Return an image of the person
     */
    getPicturesPersons(metadata: types.GetPicturesPersonsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns an image of the movie.
     *
     * @summary Return an image of the movie
     */
    getPicturesMovies(metadata: types.GetPicturesMoviesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns an image of the season of the show.
     *
     * @summary Return an image of the show's season
     */
    getPicturesSeasons(metadata: types.GetPicturesSeasonsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns an image of the SVOD or VOD platform.
     *
     * @summary Return an image of the SVOD or VOD platform
     */
    getPicturesPlatforms(metadata: types.GetPicturesPlatformsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display all episodes broadcasted in the last 8 days and up to the next 8 days.
     *
     * @summary Display all episodes broadcasted
     */
    getPlanningGeneral(metadata?: types.GetPlanningGeneralMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the schedule of the identified member or another member.
     *
     * @summary Display the schedule
     */
    getPlanningMember(metadata?: types.GetPlanningMemberMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display only the first episode of the upcoming series to be broadcasted.
     *
     * @summary Display only the first episode of the upcoming series
     */
    getPlanningIncoming(metadata?: types.GetPlanningIncomingMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the SVOD and VOD platforms available in the country.
     *
     * @summary Display the SVOD and VOD platforms available in the country
     */
    getPlatformsList(metadata?: types.GetPlatformsListMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the different services a user can have.
     *
     * @summary Display the different services a user can have
     */
    getPlatformsServices(metadata?: types.GetPlatformsServicesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add the service to the user's subscriptions.
     *
     * @summary Add the service to the user's subscriptions
     */
    postPlatformsService(metadata?: types.PostPlatformsServiceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove the service from the user's subscriptions.
     *
     * @summary Remove the service from the user's subscriptions
     */
    deletePlatformsService(metadata?: types.DeletePlatformsServiceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the latest active poll on BetaSeries.
     *
     * @summary Display the latest active poll
     */
    getPollsLast(metadata?: types.GetPollsLastMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the details of the poll with the given ID.
     *
     * @summary Display the details of a poll
     */
    getPollsPoll(metadata?: types.GetPollsPollMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the latest active poll regarding the target.
     *
     * @summary Display the latest active poll
     */
    getPollsTarget(metadata?: types.GetPollsTargetMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display all polls of BetaSeries.
     *
     * @summary Display all polls
     */
    getPollsList(metadata?: types.GetPollsListMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Send a response to a poll.
     *
     * @summary Send a response to a poll
     */
    postPollsAnswer(metadata?: types.PostPollsAnswerMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create a report for the element.
     *
     * @summary Create a report for the element
     */
    postReportsReport(metadata?: types.PostReportsReportMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Request an update for the element.
     *
     * @summary Request an update for the element
     */
    postReportsUpdate(metadata?: types.PostReportsUpdateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Return search results for all types of elements.
     *
     * @summary Return search results for all types of elements.
     */
    getSearchAll(metadata?: types.GetSearchAllMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Return series search results with advanced filters.
     *
     * @summary Return series search results with advanced filters.
     */
    getSearchShows(metadata?: types.GetSearchShowsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Return movie search results with advanced filters.
     *
     * @summary Return movie search results with advanced filters.
     */
    getSearchMovies(metadata?: types.GetSearchMoviesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Mark all episodes of a season as watched. Skips already watched episodes.
     *
     * @summary Mark all episodes of a season as watched
     */
    postSeasonsWatched(metadata?: types.PostSeasonsWatchedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove all episodes of a season from watched. Skips episodes not yet watched.
     *
     * @summary Remove all episodes of a season from watched
     */
    deleteSeasonsWatched(metadata?: types.DeleteSeasonsWatchedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Mark all episodes of a season as hidden. Skips already watched episodes.
     *
     * @summary Mark all episodes of a season as hidden
     */
    postSeasonsHide(metadata?: types.PostSeasonsHideMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove all episodes of a season from hidden. Skips already watched episodes.
     *
     * @summary Remove all episodes of a season from hidden
     */
    deleteSeasonsHide(metadata?: types.DeleteSeasonsHideMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Rate a season.
     *
     * @summary Rate a season
     */
    postSeasonsNote(metadata?: types.PostSeasonsNoteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove a rating from a season.
     *
     * @summary Remove a rating from a season
     */
    deleteSeasonsNote(metadata?: types.DeleteSeasonsNoteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Rate a series.
     *
     * @summary Rate a series
     */
    postShowsNote(metadata: types.PostShowsNoteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a series rating.
     *
     * @summary Delete a series rating
     */
    deleteShowsNote(metadata?: types.DeleteShowsNoteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Search for a series, with member information if a token is provided.
     *
     * @summary Search for a series, with member information if a token is provided
     */
    getShowsSearch(metadata?: types.GetShowsSearchMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display information about a series.
     *
     * @summary Display information about a series
     */
    getShowsDisplay(metadata?: types.GetShowsDisplayMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the list of all series.
     *
     * @summary Display the list of all series
     */
    getShowsList(metadata?: types.GetShowsListMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display a random series.
     *
     * @summary Display a random series
     */
    getShowsRandom(metadata?: types.GetShowsRandomMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display episodes of a series.
     *
     * @summary Display episodes of a series
     */
    getShowsEpisodes(metadata?: types.GetShowsEpisodesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add a series to the member's account.
     *
     * @summary Add a series to the member's account
     */
    postShowsShow(metadata?: types.PostShowsShowMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove a series from the member's account.
     *
     * @summary Remove a series from the member's account
     */
    deleteShowsShow(metadata?: types.DeleteShowsShowMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Archive a series in the member's account.
     *
     * @summary Archive a series in the member's account
     */
    postShowsArchive(metadata?: types.PostShowsArchiveMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove a series from the archives of the member's account.
     *
     * @summary Remove a series from the archives of the member's account
     */
    deleteShowsArchive(metadata?: types.DeleteShowsArchiveMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create a series recommendation from a member to a friend.
     *
     * @summary Create a series recommendation from a member to a friend
     */
    postShowsRecommendation(metadata?: types.PostShowsRecommendationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a sent or received series recommendation.
     *
     * @summary Delete a sent or received series recommendation
     */
    deleteShowsRecommendation(metadata?: types.DeleteShowsRecommendationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Change the status of a received series recommendation.
     *
     * @summary Change the status of a received series recommendation
     */
    putShowsRecommendation(metadata?: types.PutShowsRecommendationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve recommendations received by the identified user.
     *
     * @summary Retrieve recommendations received by the identified user
     */
    getShowsRecommendations(metadata?: types.GetShowsRecommendationsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve series marked as similar.
     *
     * @summary Retrieve series marked as similar
     */
    getShowsSimilars(metadata?: types.GetShowsSimilarsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve videos associated with the series.
     *
     * @summary Retrieve videos associated with the series
     */
    getShowsVideos(metadata?: types.GetShowsVideosMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve characters of the series
     *
     * @summary Retrieve characters of the series
     */
    getShowsCharacters(metadata?: types.GetShowsCharactersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve images of the series
     *
     * @summary Retrieve images of the series
     */
    getShowsPictures(metadata?: types.GetShowsPicturesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve the favorite series of the member.
     *
     * @summary Retrieve the favorite series of the member
     */
    getShowsFavorites(metadata?: types.GetShowsFavoritesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add a favorite series to the profile of the identified member.
     *
     * @summary Add a favorite series to the profile of the identified member
     */
    postShowsFavorite(metadata?: types.PostShowsFavoriteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Remove a favorite series from the profile of the identified member.
     *
     * @summary Remove a favorite series from the profile of the identified member
     */
    deleteShowsFavorite(metadata?: types.DeleteShowsFavoriteMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update tags for the given series of the identified member.
     *
     * @summary Update tags for the given series of the identified member
     */
    postShowsTags(metadata?: types.PostShowsTagsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the list of all series of the member.
     *
     * @summary Display the list of all series of the member
     */
    getShowsMember(metadata?: types.GetShowsMemberMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the list of series to discover.
     *
     * @summary Display the list of series to discover
     */
    getShowsDiscover(metadata?: types.GetShowsDiscoverMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the list of series to discover on major SVoD platforms.
     *
     * @summary Display the list of series to discover on major SVoD platforms
     */
    getShowsDiscoverPlatforms(metadata?: types.GetShowsDiscoverPlatformsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the list of available series genres.
     *
     * @summary Display the list of available series genres
     */
    getShowsGenres(metadata?: types.GetShowsGenresMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display the seasons of the series.
     *
     * @summary Display the seasons of the series
     */
    getShowsSeasons(metadata?: types.GetShowsSeasonsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Display blog articles that talk about the series.
     *
     * @summary Display blog articles that talk about the series
     */
    getShowsArticles(metadata?: types.GetShowsArticlesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve the list of finished and unrated series.
     *
     * @summary Retrieve the list of finished and unrated series
     */
    getShowsUnrated(metadata?: types.GetShowsUnratedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays the latest subtitles retrieved by BetaSeries.
     *
     * @summary Display the latest subtitles retrieved by BetaSeries
     */
    getSubtitlesLast(metadata?: types.GetSubtitlesLastMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays subtitles for a given show.
     *
     * @summary Display subtitles for a given show
     */
    getSubtitlesShow(metadata: types.GetSubtitlesShowMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays subtitles for a given episode.
     *
     * @summary Display subtitles for a given episode
     */
    getSubtitlesEpisode(metadata: types.GetSubtitlesEpisodeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays subtitles for a specific season or all seasons.
     *
     * @summary Display subtitles for a season or all seasons
     */
    getSubtitlesSeason(metadata: types.GetSubtitlesSeasonMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Reports subtitles as incorrect to be removed from the list.
     *
     * @summary Reports subtitles as incorrect to be removed from the list.
     */
    postSubtitlesReport(metadata: types.PostSubtitlesReportMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays all the tags created by the connected member.
     *
     * @summary Display all tags created by the connected member
     */
    getTagsList(metadata?: types.GetTagsListMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Adds a tag (or several) for the show (or the movie) for the connected member.
     *
     * @summary Add a tag (or several) for the show (or movie) for the connected member
     */
    postTagsTag(metadata?: types.PostTagsTagMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Removes a tag for the show (or the movie) for the connected member.
     *
     * @summary Remove a tag for the show (or movie) for the connected member
     */
    deleteTagsTag(metadata?: types.DeleteTagsTagMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays the latest events on the site.
     *
     * @summary Display the latest events on the site
     */
    getTimelineHome(metadata?: types.GetTimelineHomeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays the latest events of the friends of the identified member.
     *
     * @summary Display the latest events of the friends of the identified member
     */
    getTimelineFeed(metadata?: types.GetTimelineFeedMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays the latest events of the friends of the identified member.
     *
     * @summary Display the latest events of the friends of the identified member
     */
    getTimelineFriends(metadata?: types.GetTimelineFriendsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays the latest events of the specified member.
     *
     * @summary Display the latest events of the specified member
     */
    getTimelineMember(metadata: types.GetTimelineMemberMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays a particular event.
     *
     * @summary Display a particular event
     */
    getTimelineEvent(metadata: types.GetTimelineEventMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Displays the latest events of the connected member on the specified series.
     *
     * @summary Display the latest events of the connected member about the specified show
     */
    getTimelineShow(metadata?: types.GetTimelineShowMetadataParam): Promise<FetchResponse<number, unknown>>;
}
declare const createSDK: SDK;
export = createSDK;
