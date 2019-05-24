// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * An artifact that can be deployed in some runtime.
 *
 * @property {string[]} resourceUri
 *   Required. Resource URI for the artifact being deployed.
 *
 * @typedef DeploymentNote
 * @memberof grafeas.v1
 * @see [grafeas.v1.DeploymentNote definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/deployment.proto}
 */
const DeploymentNote = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The period during which some deployable was active in a runtime.
 *
 * @property {string} userEmail
 *   Identity of the user that triggered this deployment.
 *
 * @property {Object} deployTime
 *   Required. Beginning of the lifetime of this deployment.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} undeployTime
 *   End of the lifetime of this deployment.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} config
 *   Configuration used to create this deployment.
 *
 * @property {string} address
 *   Address of the runtime element hosting this deployment.
 *
 * @property {string[]} resourceUri
 *   Output only. Resource URI for the artifact being deployed taken from
 *   the deployable field with the same name.
 *
 * @property {number} platform
 *   Platform hosting this deployment.
 *
 *   The number should be among the values of [Platform]{@link grafeas.v1.Platform}
 *
 * @typedef DeploymentOccurrence
 * @memberof grafeas.v1
 * @see [grafeas.v1.DeploymentOccurrence definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/deployment.proto}
 */
const DeploymentOccurrence = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Types of platforms.
   *
   * @enum {number}
   * @memberof grafeas.v1
   */
  Platform: {

    /**
     * Unknown.
     */
    PLATFORM_UNSPECIFIED: 0,

    /**
     * Google Container Engine.
     */
    GKE: 1,

    /**
     * Google App Engine: Flexible Environment.
     */
    FLEX: 2,

    /**
     * Custom user-defined platform.
     */
    CUSTOM: 3
  }
};