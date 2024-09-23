//
//  AppWidget.swift
//  AppWidget
//
//  Created by Sandro Scalco on 30.08.2024.
//

import WidgetKit
import SwiftUI

struct Provider: AppIntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), nextTraining: "placeholder Training", nextEvent: "placeholder Event", nextHelfer: "placeholder Helfer", nextGame: "placeholder Game", configuration: ConfigurationAppIntent())
    }
    // USED FOR PREVIEW "ADD WIDGET TO HOMESCREEN"
    func snapshot(for configuration: ConfigurationAppIntent, in context: Context) async -> SimpleEntry {
        SimpleEntry(date: Date(), nextTraining: "Heute Abend 20:00 Uhr", nextEvent: "GV im Gemeindehaus", nextHelfer: "Heimspiel Herren 1", nextGame: "Am Sonntag: UHC Heim vs. UHC Gast",  configuration: configuration)
    }
    
    func timeline(for configuration: ConfigurationAppIntent, in context: Context) async -> Timeline<SimpleEntry> {
        var entries: [SimpleEntry] = []

        let sharedDefaults = UserDefaults.init(suiteName: "group.app.myclub.default")

        var _nextEvent: String? = nil
        if(sharedDefaults != nil &&  configuration.showEvent == true) {
            _nextEvent = sharedDefaults?.string(forKey: "nextEvent")
        }
        
        var _nextTraining: String? = nil
        if(sharedDefaults != nil && configuration.showTraining == true) {
            _nextTraining = sharedDefaults?.string(forKey: "nextTraining")
        }
        
        var _nextHelfer: String? = nil
        if(sharedDefaults != nil && configuration.showHelfer == true) {
            _nextHelfer = sharedDefaults?.string(forKey: "nextHelfer")
        }
        
        var _nextGame: String? = nil
        if(sharedDefaults != nil && configuration.showGame == true) {
            _nextGame = sharedDefaults?.string(forKey: "nextGame")
        }

        let entry = SimpleEntry(date: Date(), nextTraining: _nextTraining ?? "", nextEvent: _nextEvent ?? "", nextHelfer: _nextHelfer ?? "", nextGame: _nextGame  ?? "", configuration: configuration)
        entries.append(entry)

        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        /*let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            let entry = SimpleEntry(date: entryDate, text: nil, configuration: configuration)
            entries.append(entry)
        }*/

        return Timeline(entries: entries, policy: .atEnd)
    }
}

struct SimpleEntry: TimelineEntry {
    var date: Date
    
    let nextTraining: String?
    let nextEvent: String?
    let nextHelfer: String?
    let nextGame: String?
    let configuration: ConfigurationAppIntent
}

struct AppWidgetEntryView : View {
    var entry: Provider.Entry
    
    var body: some View {
        VStack(alignment: .leading) {
            if entry.configuration.showTraining == true && entry.nextTraining != nil {
                HStack(spacing: 5) {
                    Image(systemName: "figure.walk")
                        .foregroundColor(.blue)
                        .frame(width: 20) // Set a fixed width
                    VStack(alignment: .leading) {
                        Text("Training:")
                            .font(.subheadline)
                        Text(entry.nextTraining ?? "")
                            .font(.caption)
                    }
                }
            }
            
            if entry.configuration.showEvent == true && entry.nextEvent != nil {
                HStack(spacing: 5) {
                    Image(systemName: "calendar")
                        .foregroundColor(.green)
                        .frame(width: 20) // Same fixed width
                    VStack(alignment: .leading) {
                        Text("Event:")
                            .font(.subheadline)
                        Text(entry.nextEvent ?? "")
                            .font(.caption)
                    }
                }
            }
            
            if entry.configuration.showHelfer == true && entry.nextHelfer != nil {
                HStack(spacing: 5) {
                    Image(systemName: "lifepreserver")
                        .foregroundColor(.orange)
                        .frame(width: 20) // Same fixed width
                    VStack(alignment: .leading) {
                        Text("Helfereinsatz:")
                            .font(.subheadline)
                        Text(entry.nextHelfer ?? "")
                            .font(.caption)
                    }
                }
            }
            
            if entry.configuration.showGame == true && entry.nextGame != nil {
                HStack(spacing: 5) {
                    Image(systemName: "trophy")
                        .foregroundColor(.purple)
                        .frame(width: 20) // Same fixed width
                    VStack(alignment: .leading) {
                        Text("Spiel:")
                            .font(.subheadline)
                        Text(entry.nextGame ?? "")
                            .font(.caption)
                    }
                }
            }
        }
        .padding([.top, .bottom, .trailing]) // Remove padding on the left side
    }
}

struct AppWidget: Widget {
    let kind: String = "AppWidget"

    var body: some WidgetConfiguration {
        AppIntentConfiguration(kind: kind, intent: ConfigurationAppIntent.self, provider: Provider()) { entry in
            AppWidgetEntryView(entry: entry)
                .containerBackground(.fill.tertiary, for: .widget)
        }
    }
}

extension ConfigurationAppIntent {
    fileprivate static var smiley: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.showTraining = true
        return intent
    }
    
    fileprivate static var starEyes: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.showEvent = true
        return intent
    }
}

#Preview(as: .systemSmall) {
    AppWidget()
} timeline: {
    SimpleEntry(date: .now, nextTraining: "a", nextEvent: "b", nextHelfer: "c", nextGame: "d", configuration: .smiley)
}
