//
//  AppWidgetBundle.swift
//  AppWidget
//
//  Created by Sandro Scalco on 30.08.2024.
//

import WidgetKit
import SwiftUI

@main
struct AppWidgetBundle: WidgetBundle {
    var body: some Widget {
        AppWidget()
        AppWidgetLiveActivity()
    }
}
