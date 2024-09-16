declare const DeleteCollectionsCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the collection";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DeleteCommentsComment: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the comment";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DeleteCommentsSubscription: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of item: episode|show|member|movie";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the item in question";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteCommentsThumb: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the comment";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DeleteEpisodesDownloaded: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on TheTVDB (Optional if id provided)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteEpisodesHidden: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Identifier of the episode to remove. Multiple IDs can be separated by a comma";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteEpisodesNote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on TheTVDB (Optional if id provided)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteEpisodesWatched: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on TheTVDB (Optional if id provided)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteFriendsBlock: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID to unblock";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteFriendsFriend: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID to remove";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteMembersAvatar: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteMembersBanner: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteMembersNotification: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Notification ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteMessagesMessage: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the message to delete — if it's the first in a discussion, the whole discussion is deleted";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteMoviesFavorite: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the movie to remove.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteMoviesMovie: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteMoviesNote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeletePlatformsService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteProfileFiltersFilter: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of media (show or movie)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteSeasonsHide: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season number";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteSeasonsNote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season of the series to rate";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteSeasonsWatched: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season number";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteShowsArchive: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on TheTVDB (Optional if id specified)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteShowsFavorite: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series to remove.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteShowsNote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on TheTVDB (Optional if id specified)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteShowsRecommendation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Recommendation ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteShowsShow: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series (Optional if thetvdb_id or imdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on TheTVDB (Optional if id or imdb_id specified)";
                };
                readonly imdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on IMDB (Optional if thetvdb_id or id specified)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteTagsTag: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly show_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the show";
                };
                readonly movie_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the movie";
                };
                readonly tag: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Label of the tag to remove. You can specify several by separating them with a comma";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetBadgesBadge: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Badge ID. You can add more than one by separating them with a comma.";
                };
                readonly userId: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user who earned the badge(s).";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetCollectionsCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the collection to retrieve.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetCollectionsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly user_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member's ID (optional, default identified member)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetCommentsComment: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the comment";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetCommentsComments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Element type: episode|show|member|movie|poll|article";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the element in question";
                };
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of comments per page";
                };
                readonly since_id: {
                    readonly type: "string";
                    readonly default: "null";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last comment received (Optional)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Chronological return order, desc or asc (Default asc)";
                };
                readonly replies: {
                    readonly type: "string";
                    readonly default: "true";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include replies to comments (1 or 0, default 1)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["nbpp"];
        }];
    };
};
declare const GetCommentsReplies: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the comment";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Chronological return order, desc or asc (Default asc)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetCommentsStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of item: episode|show|member|movie";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the item in question";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEpisodesDisplay: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID. Multiple IDs can be specified separated by a comma (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on TheTVDB. Multiple IDs can be specified separated by a comma (Optional if id provided)";
                };
                readonly youtube_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on YouTube. Multiple IDs can be specified separated by a comma (Optional if id provided)";
                };
                readonly subtitles: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display subtitles if specified (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEpisodesLatest: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID. Multiple IDs can be separated by a comma (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB. Multiple IDs can be separated by a comma (Optional if id provided)";
                };
                readonly specials: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include special episodes (default false)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEpisodesList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly subtitles: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display episodes with specific subtitles available: all|vovf|vo|vf (Optional)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit to a number of episodes per series (Optional)";
                };
                readonly showsLimit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit to a number of series (Optional, default 50)";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number for series pagination (Optional, default 1)";
                };
                readonly showId: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional)";
                };
                readonly showTheTVDBId: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional)";
                };
                readonly showIMDBId: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on IMDB (Optional)";
                };
                readonly userId: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member's ID (Optional, default identified member)";
                };
                readonly specials: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include special episodes in the return (Optional, default not returned)";
                };
                readonly released: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If 1, displays only released episodes, 2 for upcoming, 0 for both (Optional, default 1)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Order of episode appearance, \"account\" for account order, \"smart\" for current viewing order (Optional, default account)";
                };
                readonly since: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Timestamp to mark episodes released after this date (Optional)";
                };
                readonly excludes: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If specified, removes certain blocks from the return: characters (Optional)";
                };
                readonly platforms: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of platform IDs where the episodes must be available (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEpisodesNext: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID. Multiple IDs can be separated by a comma (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB. Multiple IDs can be separated by a comma (Optional if id provided)";
                };
                readonly specials: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include special episodes (default false)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEpisodesScraper: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly file: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "File name to process";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEpisodesSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly show_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID for the episode to search";
                };
                readonly url: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "URL of the series to search (Optional)";
                };
                readonly number: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode number, either SxxExx or the global number";
                };
                readonly subtitles: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If specified, returns subtitles for episodes";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetEpisodesUnrated: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page, default 20";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number, default 1";
                };
                readonly date: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time limit, yesterday for episodes watched yesterday, all for all watched episodes (Optional, default yesterday)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetFriendsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID, optional, if not specified uses the identified member. If specified, blocked=false.";
                };
                readonly blocked: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If specified, returns the list of blocked people";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Returns the last action of friends (Default false)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit on the number of friends to display (optional, default all friends are returned)";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number, default 1";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetFriendsRequests: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly received: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If specified, returns the list of received requests";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersBadges: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersEmail: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersInfos: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID (optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersIsActive: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersNotifications: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly since_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Last ID (Optional)";
                };
                readonly number: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of notifications, maximum 100 (Optional, default 10)";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Descending or ascending sort (ASC or DESC, default DESC)";
                };
                readonly types: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only certain types separated by a comma (Optional)";
                };
                readonly all: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display all notifications, not just unread ones (Optional, default false)";
                };
                readonly auto_delete: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Automatic deletion of notifications (Optional, default false)";
                };
                readonly auto_mark: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Automatic marking of notifications as seen (Optional, default false)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersOptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly login: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Username, minimum 2 characters. You can use % as a wildcard.";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return. Default 10.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersUsername: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly username: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Username";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMembersYear: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID (optional)";
                };
                readonly year: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Year for the statistics calculation";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMessagesDiscussion: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the first message of the discussion";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMessagesInbox: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number, default 1";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesArticles: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesCharacters: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesDiscover: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of discovery: popular, upcoming";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit on the number of movies to display (optional, default 100, maximum 200)";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the movie list (optional, default 0)";
                };
                readonly includes: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Add some additional blocks to the return: platforms separated by a comma (optional).";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesFavorites: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID, optional, if not specified uses the identified member.";
                };
                readonly start: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the movie list (optional, default 0)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit on the number of movies to display (maximum 1000) (optional)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify return order: alphabetical, popularity, added, release, svod (optional, default alphabetical)";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential movie info (Default false)";
                };
                readonly includes: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If summary = true, add certain additional blocks to the return: user, notes, platforms separated by a comma (optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesGenres: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly start: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the movie list (optional, default 0)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit of movies to display (optional, default 100, max 1000)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify return order: alphabetical, popularity (optional)";
                };
                readonly filter: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display filter (optional, new=only movies not in the account)";
                };
                readonly platforms: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "IDs of platforms where movies are available";
                };
                readonly country: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Country for platforms";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesMember: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member's ID (optional, default identified member)";
                };
                readonly state: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "0 = to watch, 1 = watched, 2 = do not want to watch (default 0)";
                };
                readonly released: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "0 = unreleased movies, 1 = released movies, 2 = all (default 2)";
                };
                readonly start: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the movie list (optional, default 0)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit of movies to display (maximum 1000) (optional)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify return order: alphabetical, popularity, added, release, svod (optional, default alphabetical)";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential movie info (Default false)";
                };
                readonly tags: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retrieve movies with tags separated by a comma (optional)";
                };
                readonly excluded_tags: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Exclude movies with tags separated by a comma (optional)";
                };
                readonly includes: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If summary = true, add certain additional blocks to the return: user, notes, platforms separated by a comma (optional)";
                };
                readonly platforms: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of platform IDs where the movies must be available (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesMovie: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID";
                };
                readonly tmdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID on TheMovieDB";
                };
                readonly imdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID on IMDB";
                };
                readonly includes: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If `summary = true`, add some additional blocks to the return: user, notes, platforms separated by a comma (optional).";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesRandom: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly nb: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of movies to display, default 1";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesScraper: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly file: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "File name to process";
                };
                readonly number: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to return (default 1)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Searched title (optional if order=popularity)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return order (title|popularity), default title";
                };
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page, default 5, maximum 100";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number, default 1";
                };
                readonly recent: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Only movies from the last two years (Default false)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesSimilars: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID";
                };
                readonly details: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return movie details (Default false)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetMoviesUpcoming: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of movies (Optional, default 25)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return order: release_date, popularity (Optional, default release_date)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetNewsLast: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly number: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of news, default 10";
                };
                readonly tailored: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return news from series followed by the member";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPersonsArticles: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Person's ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPersonsPerson: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Person's ID.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPicturesBadges: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the badge";
                };
                readonly level: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Level of the badge (optional if badge is non-tiered)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetPicturesCharacters: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the character";
                };
                readonly type: {
                    readonly type: "string";
                    readonly default: "show";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type show or movie (optional, default show)";
                };
                readonly width: {
                    readonly type: "string";
                    readonly default: "250";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired width (optional, default 250)";
                };
                readonly height: {
                    readonly type: "string";
                    readonly default: "375";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired height (optional, default 375)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetPicturesEpisodes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the episode";
                };
                readonly width: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired width (optional)";
                };
                readonly height: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired height (optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetPicturesMembers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the member";
                };
                readonly width: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired width (optional)";
                };
                readonly height: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired height (optional)";
                };
                readonly placeholder: {
                    readonly type: "string";
                    readonly default: "jpeg";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of format if no photo is mentioned: jpeg, png, or svg (optional, default jpeg)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetPicturesMovies: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the movie";
                };
                readonly width: {
                    readonly type: "string";
                    readonly default: "250";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired width (optional, default 250)";
                };
                readonly height: {
                    readonly type: "string";
                    readonly default: "375";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired height (optional, default 375)";
                };
                readonly language: {
                    readonly type: "string";
                    readonly default: "original";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Language for the poster (optional, default original)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User's language (optional, but mandatory if language is specified)";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetPicturesPersons: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the person";
                };
                readonly width: {
                    readonly type: "string";
                    readonly default: "250";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired width (optional, default 250)";
                };
                readonly height: {
                    readonly type: "string";
                    readonly default: "375";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired height (optional, default 375)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetPicturesPlatforms: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the platform";
                };
                readonly width: {
                    readonly type: "string";
                    readonly default: "100";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired width (optional, default 100)";
                };
                readonly height: {
                    readonly type: "string";
                    readonly default: "100";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired height (optional, default 100)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetPicturesSeasons: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly show_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the show";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season number";
                };
                readonly width: {
                    readonly type: "string";
                    readonly default: "250";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired width (optional, default 250)";
                };
                readonly height: {
                    readonly type: "string";
                    readonly default: "375";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired height (optional, default 375)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["show_id", "season"];
        }];
    };
};
declare const GetPicturesShows: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the show";
                };
                readonly width: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired width (optional)";
                };
                readonly height: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Desired height (optional)";
                };
                readonly picked: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Take the image voted on by the community (banner or show, optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetPlanningGeneral: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Origin date (YYYY-MM-DD — Optional, default \"now\")";
                };
                readonly before: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of days before (Optional, default 8)";
                };
                readonly after: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of days after (Optional, default 8)";
                };
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of episodes to display: \"all\" or \"premieres\" (Optional, default \"all\")";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPlanningIncoming: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPlanningMember: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member's ID (Optional if identified)";
                };
                readonly unseen: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display only unseen episodes";
                };
                readonly month: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display the schedule for the specified month (format YYYY-MM)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPlatformsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly country: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Country";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPlatformsServices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member's ID (Optional if identified)";
                };
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of services (svod, vod, all) Default all";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPollsLast: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPollsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page, default 10";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number, default 1";
                };
                readonly inactive: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display inactive polls (1 or 0, default 0)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPollsPoll: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Poll ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPollsTarget: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Target type (episode or show)";
                };
                readonly ref_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the episode or series";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetSearchAll: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search term";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results returned per type (series, movies, members), default 5.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetSearchMovies: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly text: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search term";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results returned (optional, default 20)";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the movie list (optional, default 0)";
                };
                readonly genres: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Genres separated by a comma (must correspond to keys returned by movies/genres)";
                };
                readonly diffusions: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Broadcast types separated by a comma (none, theaters, sale)";
                };
                readonly casting: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Actor's name in the movies to search";
                };
                readonly svods: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "SVoD platform IDs separated by a comma";
                };
                readonly releases: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Release years separated by a comma";
                };
                readonly debut: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Initial of the movies returned";
                };
                readonly tri: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting of the movies (name, added, rating, popularity by default, release-asc, release-desc)";
                };
                readonly autres: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Other options. Can be new for only movies not followed, seen, unseen, or wishlist";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetSearchShows: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly text: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search term";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results returned (optional, default 20, maximum 100)";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the series list (optional, default 0)";
                };
                readonly genres: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Genres separated by a comma (must correspond to keys returned by shows/genres)";
                };
                readonly diffusions: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Broadcasts separated by a comma (week, finished, ongoing, standby, inproduction, planned, pilot, canceled)";
                };
                readonly duration: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode duration (1-19, 20-30, 31-40, 41-50, 51-60, 61+)";
                };
                readonly svods: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "SVoD platform IDs separated by a comma";
                };
                readonly creations: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Years separated by a comma";
                };
                readonly pays: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Origin countries of the series separated by a comma (must be the 2-letter country code)";
                };
                readonly chaines: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Broadcast channels separated by a comma";
                };
                readonly debut: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Initial of the series returned";
                };
                readonly tri: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting of the series (name, followed, id, rating, popularity by default, release-asc, release-desc)";
                };
                readonly autres: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Other options. Can be new for only series not followed or mine for only those followed by the user";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsArticles: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if url specified)";
                };
                readonly url: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series URL. (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsCharacters: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsDiscover: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit the number of series to display (optional, default 100, maximum 200)";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the series list (optional, default 0)";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential information";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsDiscoverPlatforms: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly summary: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential information";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsDisplay: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID. You can include multiple by separating them with a comma (Optional)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB. You can include multiple by separating them with a comma (Optional)";
                };
                readonly imdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on IMDB. You can include multiple by separating them with a comma (Optional)";
                };
                readonly url: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series URL. (Optional)";
                };
                readonly "summary(default=false)": {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only the essential information of the series.";
                };
                readonly includes: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If `summary = true`, add some additional blocks to the return: user, notes separated by a comma (optional).";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsEpisodes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on TheTVDB (Optional if id specified)";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season number (Optional)";
                };
                readonly episode: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode number (Optional)";
                };
                readonly subtitles: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display subtitles if specified (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsFavorites: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member's ID, optional, if not specified uses the identified member.";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify return order: alphabetical, progression, remaining_time, remaining_episodes (optional, default alphabetical)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit the number of series to display (optional, default 100, maximum 200)";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the series list (optional, default 0)";
                };
                readonly status: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter series by status: current, active, archived (optional)";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential series info";
                };
                readonly includes: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If summary = true, add certain additional blocks to the return: user, userVisited, notes, seasons separated by a comma (optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsGenres: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify return order: alphabetical, popularity, followers (optional)";
                };
                readonly since: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display only series modified since this date (UNIX timestamp — optional)";
                };
                readonly recent: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Only series from the last two years";
                };
                readonly starting: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display series starting with specified characters (optional)";
                };
                readonly start: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for series list (optional, default 0)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit number of series displayed (optional, default 100)";
                };
                readonly filter: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display filter (optional, new=only series not in the account)";
                };
                readonly platforms: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "IDs of SVOD/VOD platforms where series are available";
                };
                readonly country: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Country for SVOD/VOD platforms";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential series info";
                };
                readonly broadcasted: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only already broadcasted series";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsMember: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member's ID (optional, default identified member)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify return order: alphabetical, progression, remaining_time, remaining_episodes, last_seen, last_added, rating, avg_rating, custom, next_date (optional, default alphabetical)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit the number of series to display (optional, default 100, maximum 200)";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the series list (optional, default 0)";
                };
                readonly status: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter series by status: current, active, archived, archived_and_completed, archived_and_not_started, completed, active_and_completed, not_started, stopped (optional)";
                };
                readonly excluded_genres: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Exclude certain genres separated by a comma for the series return (optional)";
                };
                readonly excluded_networks: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Exclude certain networks separated by a comma for the series return (optional)";
                };
                readonly excluded_status: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Exclude certain statuses for the series return (optional)";
                };
                readonly tags: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retrieve series with tags separated by a comma (optional)";
                };
                readonly excluded_tags: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Exclude series with tags separated by a comma (optional)";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential series info";
                };
                readonly includes: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If summary = true, add certain additional blocks to the return: user, userVisited, notes, platforms, seasons separated by a comma (optional)";
                };
                readonly platforms: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of platform IDs where series must be available (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsPictures: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify return order: -date (date DESC), date (date ASC) (optional, default sort by id ASC)";
                };
                readonly start: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the image list (optional, default 0)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit the number of images to display (optional, default all)";
                };
                readonly format: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Image display format: hd or all (optional, default all)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsRandom: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly nb: {
                    readonly type: "string";
                    readonly default: "1";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of series to display, default 1";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential series info";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsRecommendations: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Searched title";
                };
                readonly summary: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return only essential series info";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return order (title|popularity|followers), default title";
                };
                readonly recent: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Only series from the last two years";
                };
                readonly platforms: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "IDs of SVOD/VOD platforms where series are available";
                };
                readonly country: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Country for SVOD/VOD platforms";
                };
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page, default 5, maximum 100";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number, default 1";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsSeasons: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsSimilars: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly details: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return series details";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsUnrated: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results per page, default 20";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number, default 1";
                };
                readonly date: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time limit, month for series ended in the last 30 days, all for all finished series (Optional, default month)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetShowsVideos: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly order: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify return order: -date (add date DESC), date (add date ASC) (optional, default sort by season/episode)";
                };
                readonly start: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Starting number for the video list (optional, default 0)";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit the number of videos to display (optional, default all)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetSubtitlesEpisode: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the episode";
                };
                readonly language: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display only certain languages: all|vovf|vo|vf (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetSubtitlesLast: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly number: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of subtitles, maximum 100";
                };
                readonly language: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display only certain languages: all|vovf|vo|vf (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetSubtitlesSeason: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: "all";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season number or 'all' to retrieve packages for all seasons (Optional, default is all)";
                };
                readonly language: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display only certain languages: all|vovf|vo|vf (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetSubtitlesShow: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the show";
                };
                readonly language: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display only certain languages: all|vovf|vo|vf (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetTagsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: "show";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of media for the tags to display (show or movie, default is show)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetTimelineEvent: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the event";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetTimelineFeed: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of events per page, maximum 100";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: "1";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number (Optional, default 1)";
                };
                readonly types: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Types of events to return, separated by a comma (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetTimelineFriends: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of events per page, maximum 100";
                };
                readonly since_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last event received to get previous ones (Optional)";
                };
                readonly last_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last event received to get subsequent ones (Optional)";
                };
                readonly types: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Types of events to return, separated by a comma (Optional)";
                };
                readonly self: {
                    readonly type: "string";
                    readonly default: "0";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include events of the identified member (Optional, default 0)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetTimelineHome: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of events per page, maximum 100";
                };
                readonly since_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last event received to get previous ones (Optional)";
                };
                readonly last_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last event received to get subsequent ones (Optional)";
                };
                readonly types: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Types of events to return, separated by a comma (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetTimelineMember: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the member";
                };
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of events per page, maximum 100";
                };
                readonly since_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last event received to get previous ones (Optional)";
                };
                readonly last_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last event received to get subsequent ones (Optional)";
                };
                readonly types: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Types of events to return, separated by a comma (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetTimelineShow: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on TheTVDB (Optional if id provided)";
                };
                readonly nbpp: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of events per page, maximum 100";
                };
                readonly since_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last event received to get previous ones (Optional)";
                };
                readonly last_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last event received to get subsequent ones (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostCollectionsCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the collection to update (Mandatory for updating)";
                };
                readonly name: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the collection (Mandatory for creation)";
                };
                readonly description: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Description of the collection (Optional)";
                };
                readonly private: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Indicates if the collection if private (Optional, possibles values : '1' (for private) or '0' (for public, default value when creation))";
                };
                readonly items: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of shows/movies for the collection (Mandatory for creation, Optional for edition. Must be a JSON array with format : [{\"type\": \"show\", \"id\": 123, \"note\": \"Note about series\"}, {\"type\": \"movie\", \"id\": 456, \"note\": null}])";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostCommentsComment: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of item: episode|show|member|movie|event|poll|article (Mandatory for creation, or reference)";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the item in question (Mandatory for creation, or reference)";
                };
                readonly reference: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reference ID of the item in question (Mandatory for creation, or type + id)";
                };
                readonly in_reply_to: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If a reply, inner_id of the corresponding comment (Optional for creation)";
                };
                readonly text: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Text of the comment";
                };
                readonly edit_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the comment to edit (Mandatory for editing)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["type", "id", "reference"];
        }];
    };
};
declare const PostCommentsCommentEvent: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of the event: film_add|markas.... (Optional if id provided)";
                };
                readonly element_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the element involved in the event (Optional if id provided)";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the event to comment on (Optional if type + element_id provided)";
                };
                readonly text: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Text of the comment";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostCommentsSubscription: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of item: episode|show|member|movie";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the item in question";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostCommentsThumb: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the comment";
                };
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of the vote (-1 for a downvote, 1 for an upvote)";
                };
                readonly switch: {
                    readonly type: "string";
                    readonly default: "false";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether the user switches their existing vote (default false)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id", "type"];
        }];
    };
};
declare const PostEpisodesDownloaded: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on TheTVDB (Optional if id provided)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostEpisodesHidden: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Identifier of the episode to mark. Multiple IDs can be separated by a comma";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostEpisodesNote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on TheTVDB (Optional if id provided)";
                };
                readonly note: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rating from 1 to 5";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostEpisodesWatched: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID (Optional if thetvdb_id provided)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on TheTVDB (Optional if id provided)";
                };
                readonly youtube_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Episode ID on YouTube (Optional if id provided)";
                };
                readonly bulk: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If specified, all previous episodes will also be marked as watched (default true)";
                };
                readonly delete: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If specified, all subsequent episodes will no longer be marked as watched";
                };
                readonly note: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If a rating between 1 and 5 is specified, rate the episode";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostFriendsBlock: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID to block";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostFriendsFriend: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Member ID to add as a friend";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersAccessToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly client_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Your API key.";
                };
                readonly client_secret: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The secret key provided in your key information.";
                };
                readonly redirect_uri: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The callback address you had already provided for the first part.";
                };
                readonly code: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Code obtained from the first part of authentication.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersAuth: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly login: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Identifier (login or e-mail)";
                };
                readonly password: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "MD5 encrypted password";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersAvatar: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly avatar: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Image to be used for the user's avatar.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersBanner: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly avatar: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Image to be used for the user's banner.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersDelete: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersEmail: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The new email address";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersLocale: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersLost: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly find: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Email address or username";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersOauth: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersOption: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Option name (downloaded, global, specials, notation, timelag, friendship, comment_language)";
                };
                readonly value: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Option value (1 or 0, for friendship: open|requests|friends|nobody, for episodes_tri: name, date, empty, for comment_language: all, site_locale and locale available on Betaseries)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersPassword: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly current_password: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The current password of the member";
                };
                readonly new_password: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The new password for the member";
                };
                readonly confirmed_password: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The confirmation of the new password for the member";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersSignup: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly login: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Username";
                };
                readonly password: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "MD5 password — Optional: If not provided, it will be generated and sent in the email";
                };
                readonly email: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Email address";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMembersSync: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "mails[]": {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "POST array of email addresses to search";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMessagesMessage: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly to: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the recipient member (mandatory if first message)";
                };
                readonly text: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Text of the message";
                };
                readonly title: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Title of the message (mandatory if first message)";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the first message in the discussion (optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMessagesRead: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the message to mark as read";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMoviesFavorite: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the movie to add.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMoviesMovie: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID";
                };
                readonly mail: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Enable email alerts (0 or 1, default 1)";
                };
                readonly twitter: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Enable Twitter alerts (0 or 1, default 1)";
                };
                readonly state: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "0 = to watch, 1 = watched, 2 = do not want to watch (default 0)";
                };
                readonly profile: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Display on profile (0 or 1, default 1)";
                };
                readonly note: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie rating (optional, from 1 to 5)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostMoviesNote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Movie ID";
                };
                readonly note: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rating from 1 to 5";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostOauthAccessToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly client_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Your API key.";
                };
                readonly client_secret: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The secret key provided in your key's details.";
                };
                readonly redirect_uri: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The callback address you had previously specified for the first part.";
                };
                readonly code: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Code obtained by the first part of the authentication.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostOauthDevice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostPlatformsService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostPollsAnswer: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Poll ID";
                };
                readonly answer: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Answer number";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostReportsReport: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of element: character|comment|film|forum|quizz|show|suggest|suggest_film|member (Mandatory)";
                };
                readonly target_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the concerned element (Mandatory)";
                };
                readonly reason: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reason for the report (Optional)";
                };
                readonly source: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Source of the report: web, app, api... (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostReportsUpdate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of element: movie|show (Mandatory)";
                };
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the concerned element (Mandatory)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostSeasonsHide: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season number";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostSeasonsNote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season of the series to rate";
                };
                readonly note: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rating assigned from 1 to 5";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostSeasonsWatched: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB (Optional if id specified)";
                };
                readonly season: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Season number";
                };
                readonly note: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rating assigned from 1 to 5 (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostShowsArchive: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on TheTVDB (Optional if id specified)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostShowsFavorite: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series to add.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostShowsNote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on TheTVDB (Optional if id specified)";
                };
                readonly note: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rating assigned from 1 to 5";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["note"];
        }];
    };
};
declare const PostShowsRecommendation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series (Optional if thetvdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series on TheTVDB (Optional if id specified)";
                };
                readonly to: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Friend's member ID";
                };
                readonly comments: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comments for the friend (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostShowsShow: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID. You can include multiple by separating them with a comma (Optional if thetvdb_id or imdb_id specified)";
                };
                readonly thetvdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on TheTVDB. You can include multiple by separating them with a comma (Optional if id or imdb_id specified)";
                };
                readonly imdb_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series ID on IMDB. You can include multiple by separating them with a comma (Optional if id or thetvdb_id specified)";
                };
                readonly episode_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the last watched episode. If multiple series, the order of episodes must be exactly the same (Optional)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostShowsTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the series to tag.";
                };
                readonly tags: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Series tags: Words separated by a comma.";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostSubtitlesReport: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the subtitle";
                };
                readonly reason: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reason why the subtitle is incorrect";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const PostTagsTag: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly show_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the show";
                };
                readonly movie_id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the movie";
                };
                readonly tag: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Label of the tag to create. You can add several by separating them with a comma";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PutShowsRecommendation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Recommendation ID";
                };
                readonly status: {
                    readonly type: "string";
                    readonly default: any;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Status (accept or decline)";
                };
                readonly locale: {
                    readonly type: "string";
                    readonly default: "fr";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Locale parameter to specify language preference";
                };
            };
            readonly required: readonly [];
        }];
    };
};
export { DeleteCollectionsCollection, DeleteCommentsComment, DeleteCommentsSubscription, DeleteCommentsThumb, DeleteEpisodesDownloaded, DeleteEpisodesHidden, DeleteEpisodesNote, DeleteEpisodesWatched, DeleteFriendsBlock, DeleteFriendsFriend, DeleteMembersAvatar, DeleteMembersBanner, DeleteMembersNotification, DeleteMessagesMessage, DeleteMoviesFavorite, DeleteMoviesMovie, DeleteMoviesNote, DeletePlatformsService, DeleteProfileFiltersFilter, DeleteSeasonsHide, DeleteSeasonsNote, DeleteSeasonsWatched, DeleteShowsArchive, DeleteShowsFavorite, DeleteShowsNote, DeleteShowsRecommendation, DeleteShowsShow, DeleteTagsTag, GetBadgesBadge, GetCollectionsCollection, GetCollectionsList, GetCommentsComment, GetCommentsComments, GetCommentsReplies, GetCommentsStatus, GetEpisodesDisplay, GetEpisodesLatest, GetEpisodesList, GetEpisodesNext, GetEpisodesScraper, GetEpisodesSearch, GetEpisodesUnrated, GetFriendsList, GetFriendsRequests, GetMembersBadges, GetMembersEmail, GetMembersInfos, GetMembersIsActive, GetMembersNotifications, GetMembersOptions, GetMembersSearch, GetMembersUsername, GetMembersYear, GetMessagesDiscussion, GetMessagesInbox, GetMoviesArticles, GetMoviesCharacters, GetMoviesDiscover, GetMoviesFavorites, GetMoviesGenres, GetMoviesList, GetMoviesMember, GetMoviesMovie, GetMoviesRandom, GetMoviesScraper, GetMoviesSearch, GetMoviesSimilars, GetMoviesUpcoming, GetNewsLast, GetPersonsArticles, GetPersonsPerson, GetPicturesBadges, GetPicturesCharacters, GetPicturesEpisodes, GetPicturesMembers, GetPicturesMovies, GetPicturesPersons, GetPicturesPlatforms, GetPicturesSeasons, GetPicturesShows, GetPlanningGeneral, GetPlanningIncoming, GetPlanningMember, GetPlatformsList, GetPlatformsServices, GetPollsLast, GetPollsList, GetPollsPoll, GetPollsTarget, GetSearchAll, GetSearchMovies, GetSearchShows, GetShowsArticles, GetShowsCharacters, GetShowsDiscover, GetShowsDiscoverPlatforms, GetShowsDisplay, GetShowsEpisodes, GetShowsFavorites, GetShowsGenres, GetShowsList, GetShowsMember, GetShowsPictures, GetShowsRandom, GetShowsRecommendations, GetShowsSearch, GetShowsSeasons, GetShowsSimilars, GetShowsUnrated, GetShowsVideos, GetSubtitlesEpisode, GetSubtitlesLast, GetSubtitlesSeason, GetSubtitlesShow, GetTagsList, GetTimelineEvent, GetTimelineFeed, GetTimelineFriends, GetTimelineHome, GetTimelineMember, GetTimelineShow, PostCollectionsCollection, PostCommentsComment, PostCommentsCommentEvent, PostCommentsSubscription, PostCommentsThumb, PostEpisodesDownloaded, PostEpisodesHidden, PostEpisodesNote, PostEpisodesWatched, PostFriendsBlock, PostFriendsFriend, PostMembersAccessToken, PostMembersAuth, PostMembersAvatar, PostMembersBanner, PostMembersDelete, PostMembersDestroy, PostMembersEmail, PostMembersLocale, PostMembersLost, PostMembersOauth, PostMembersOption, PostMembersPassword, PostMembersSignup, PostMembersSync, PostMessagesMessage, PostMessagesRead, PostMoviesFavorite, PostMoviesMovie, PostMoviesNote, PostOauthAccessToken, PostOauthDevice, PostPlatformsService, PostPollsAnswer, PostReportsReport, PostReportsUpdate, PostSeasonsHide, PostSeasonsNote, PostSeasonsWatched, PostShowsArchive, PostShowsFavorite, PostShowsNote, PostShowsRecommendation, PostShowsShow, PostShowsTags, PostSubtitlesReport, PostTagsTag, PutShowsRecommendation };
