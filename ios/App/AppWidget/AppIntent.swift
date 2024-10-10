//
//  AppIntent.swift
//  AppWidget
//
//  Created by Sandro Scalco on 30.08.2024.
//

import WidgetKit
import AppIntents

struct ConfigurationAppIntent: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Configuration"
    static var description = IntentDescription("This is an example widget.")

    // An example configurable parameter.
    @Parameter(title: "Nächstes Training anzeigen", default: true)
    var showTraining: Bool

    @Parameter(title: "Nächster Event anzeigen", default: true)
    var showEvent: Bool

    @Parameter(title: "Nächster Helferevent anzeigen", default: true)
    var showHelfer: Bool

    @Parameter(title: "Nächstes Spiel anzeigen", default: true)
    var showGame: Bool
}
